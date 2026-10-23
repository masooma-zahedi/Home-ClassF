
import React, { useState, useEffect, useRef } from "react";

const DEFAULT_WORDS =[ "سَر", "سَد", "سَم", "سَبَد", "سَرد","اَسب", "اِسم", "اَساس", "بَس",  "مَس","ناس", "رَسم","سارا", "دَرس","سَرما", "سُرسُر","بام", "باران", "بَد", "بَم", "بَر", "بُرد", "دار", "داد", "دَر", "دُر", "مادَر",]
const COLORS = [
  "#ff5577", "#ffb52e", "#8065ef", "#42bd72",
  "#35b8e8", "#ff8248", "#ec63d4", "#54c8c0",
];

const INITIAL_POSITIONS = [
  [12, 12], [39, 18], [72, 10], [20, 48],
  [51, 43], [81, 48], [8, 74], [60, 76],
];

const random = (min, max) =>
  Math.random() * (max - min) + min;

const shuffle = (array) =>
  [...array].sort(() => Math.random() - 0.5);

// CSS در همین فایل React
const css = `
.balloon-game {
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 24px;
  background: #e6f7ff;
  color: #24345b;
  font-family: inherit;
  box-shadow: 0 8px 25px #00000012;
}

.balloon-game * {
  box-sizing: border-box;
}

.balloon-game .header {
  padding: 20px 12px 8px;
  text-align: center;
}

.balloon-game .title {
  margin: 0 0 12px;
  font-size: clamp(21px, 4vw, 30px);
}

.balloon-game .stats {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 12px;
}

.balloon-game .stats span {
  padding: 8px 15px;
  border-radius: 20px;
  background: white;
  font-weight: bold;
}

.balloon-game .target {
  display: inline-block;
  min-width: 190px;
  padding: 10px 25px;
  border: 3px solid #ffcc54;
  border-radius: 18px;
  background: white;
}

.balloon-game .target p {
  margin: 0 0 5px;
}

.balloon-game .target strong {
  color: #e84d88;
  font-size: 32px;
}

.balloon-game .message {
  min-height: 28px;
  margin: 12px 0 6px;
  font-weight: bold;
}

.balloon-game .sky {
  position: relative;
  width: 100%;
  height: clamp(460px, 65vw, 620px);
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(ellipse at 15% 100%,
      #b7edb0 0%, transparent 45%),
    linear-gradient(#70cefa, #e0f8ff);
}

.balloon-game .cloud {
  position: absolute;
  width: 110px;
  height: 34px;
  border-radius: 50px;
  background: #ffffff80;
  filter: blur(1px);
  pointer-events: none;
}

.balloon-game .cloud::before,
.balloon-game .cloud::after {
  content: "";
  position: absolute;
  bottom: 7px;
  border-radius: 50%;
  background: inherit;
}

.balloon-game .cloud::before {
  left: 20px;
  width: 48px;
  height: 48px;
}

.balloon-game .cloud::after {
  left: 53px;
  width: 37px;
  height: 37px;
}

.balloon-game .word-balloon {
  position: absolute;
  width: clamp(78px, 11vw, 112px);
  height: clamp(103px, 14vw, 140px);
  padding: 6px;
  border: 2px solid #ffffffa0;
  border-radius: 50% 50% 46% 46%;
  background: var(--balloon-color);
  box-shadow:
    inset -9px -12px 0 #00000012,
    inset 8px 8px 0 #ffffff30,
    0 5px 12px #00000015;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transform: translate(-50%, -50%);
  transition: filter 0.15s;
  -webkit-tap-highlight-color: transparent;
}

.balloon-game .word-balloon:hover:not(:disabled) {
  filter: brightness(1.08);
}

.balloon-game .word-balloon:focus-visible {
  outline: 4px solid #24345b;
  outline-offset: 3px;
}

.balloon-game .word-balloon.inflating {
  animation: inflate-balloon 0.32s ease-in forwards;
  pointer-events: none;
}

.balloon-game .balloon-word {
  position: relative;
  z-index: 1;
  max-width: 100%;
  padding: 5px 8px;
  border-radius: 15px;
  background: #ffffffed;
  color: #26375d;
  font-size: clamp(14px, 2.4vw, 21px);
  font-weight: 800;
  line-height: 1.5;
  overflow-wrap: anywhere;
  pointer-events: none;
}

.balloon-game .knot {
  position: absolute;
  bottom: -7px;
  left: calc(50% - 6px);
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: var(--balloon-color);
  transform: rotate(45deg);
}

.balloon-game .shard {
  position: absolute;
  z-index: 5;
  width: var(--shard-size);
  height: calc(var(--shard-size) * 1.4);
  left: var(--shard-x);
  top: var(--shard-y);
  border-radius: 3px;
  background: var(--shard-color);
  pointer-events: none;
  animation: shard-fly 650ms ease-out forwards;
}

.balloon-game .sparkle {
  position: absolute;
  z-index: 6;
  left: var(--spark-x);
  top: var(--spark-y);
  color: #fff9a8;
  font-size: 23px;
  pointer-events: none;
  animation: sparkle-fly 650ms ease-out forwards;
}

.balloon-game .finish {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e6f7ffed;
  text-align: center;
}

.balloon-game .finish h3 {
  font-size: 29px;
}

.balloon-game .finish button,
.balloon-game .restart {
  padding: 11px 23px;
  border: none;
  border-radius: 14px;
  background: #7356e8;
  color: white;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
}

.balloon-game .restart {
  display: block;
  margin: 14px auto;
}

@keyframes inflate-balloon {
  0%   { transform: translate(-50%, -50%) scale(1); }
  45%  { transform: translate(-50%, -50%) scale(1.22); }
  75%  { transform: translate(-50%, -50%) scale(1.38); }
  100% { transform: translate(-50%, -50%) scale(0.12); opacity: 0; }
}

@keyframes shard-fly {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 1;
  }
  100% {
    transform:
      translate(var(--shard-dx), var(--shard-dy))
      rotate(var(--shard-rotate)) scale(0.4);
    opacity: 0;
  }
}

@keyframes sparkle-fly {
  0% {
    transform: translate(0, 0) scale(0.5);
    opacity: 1;
  }
  100% {
    transform:
      translate(var(--spark-dx), var(--spark-dy)) scale(1.4);
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .balloon-game .sky {
    height: 490px;
  }

  .balloon-game .word-balloon {
    width: 78px;
    height: 103px;
  }

  .balloon-game .balloon-word {
    font-size: 14px;
    padding: 5px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .balloon-game .shard,
  .balloon-game .sparkle {
    animation-duration: 250ms;
  }
}
`;

function makeBalloons(words, round) {
  const selected = shuffle(words).slice(0, 8);

  return shuffle(selected).map((word, index) => {
    const [x, y] = INITIAL_POSITIONS[index];

    return {
      id: `${round}-${index}-${word}`,
      word,
      color: COLORS[index % COLORS.length],
      x: x + random(-3, 3),
      y: y + random(-3, 3),
      // سرعت مستقل هر بالن
vx: random(-0.1025, 0.1025),
vy: random(-0.102, 0.102),
      phase: random(0, Math.PI * 2),
    };
  });
}

// تولید صدای ترکیدن بدون فایل صوتی خارجی
function playPopSound(audioRef) {
  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    if (!audioRef.current) {
      audioRef.current = new AudioContextClass();
    }

    const ctx = audioRef.current;

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const duration = 0.16;
    const buffer = ctx.createBuffer(
      1,
      Math.floor(ctx.sampleRate * duration),
      ctx.sampleRate
    );

    const data = buffer.getChannelData(0);

    for (let i = 0; i < data.length; i++) {
      const fade = Math.pow(1 - i / data.length, 3);
      data[i] = (Math.random() * 2 - 1) * fade;
    }

    const noise = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    noise.buffer = buffer;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1800, now);
    filter.frequency.exponentialRampToValueAtTime(250, now + duration);

    gain.gain.setValueAtTime(0.85, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(now);
    noise.stop(now + duration);
  } catch (error) {
    // در صورت مسدود بودن صدا، بازی همچنان کار می‌کند.
  }
}

function createExplosion(balloon) {
  const pieces = [];

  for (let i = 0; i < 15; i++) {
    const angle = (Math.PI * 2 * i) / 15 + random(-0.2, 0.2);
    const distance = random(45, 145);

    pieces.push({
      id: `${balloon.id}-piece-${i}`,
      x: balloon.x,
      y: balloon.y,
      color: i % 3 === 0 ? "#fff3a1" : balloon.color,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance + random(15, 65),
      rotate: random(-540, 540),
      size: random(5, 11),
    });
  }

  for (let i = 0; i < 5; i++) {
    pieces.push({
      id: `${balloon.id}-spark-${i}`,
      sparkle: true,
      x: balloon.x,
      y: balloon.y,
      dx: random(-80, 80),
      dy: random(-100, 40),
    });
  }

  return pieces;
}

export default function BalloonGame({
  words = DEFAULT_WORDS,
  rounds = 20,
}) {
  const [balloons, setBalloons] = useState([]);
  const [target, setTarget] = useState("");
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [message, setMessage] = useState("کلمه مورد نظر را پیدا کن!");
  const [explosions, setExplosions] = useState([]);
  const [poppingId, setPoppingId] = useState(null);
  const [finished, setFinished] = useState(false);

  const audioRef = useRef(null);
  const timersRef = useRef([]);
  const balloonsRef = useRef([]);
  const lockedRef = useRef(false);

  
const [musicOn, setMusicOn] = useState(false);
const musicRef = useRef(null);

useEffect(() => {
  const audio = new Audio(`${process.env.PUBLIC_URL}/sounds/soft-1.mp3`);
  audio.loop = true;
  audio.volume = 0.15;
  musicRef.current = audio;

  return () => {
    audio.pause();
    audio.src = "";
    musicRef.current = null;
  };
}, []);

  function clearTimers() {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }

  function newRound(nextRound) {
    const safeWords = Array.isArray(words)
      ? words.filter((word) => typeof word === "string" && word.trim())
      : [];

    if (!safeWords.length) {
      setBalloons([]);
      setTarget("");
      return;
    }

    const next = makeBalloons(safeWords, nextRound);

    balloonsRef.current = next;
    setBalloons(next);

    setTarget(
      next[Math.floor(Math.random() * next.length)].word
    );

    setExplosions([]);
    setPoppingId(null);
    lockedRef.current = false;
    setMessage("کلمه مورد نظر را پیدا کن!");
  }

  useEffect(() => {
    newRound(1);

    return () => {
      clearTimers();

      if (audioRef.current) {
        audioRef.current.close().catch(() => {});
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // حرکت آزاد و پیوسته بالن‌ها؛ برخورد با لبه‌ها باعث برگشت می‌شود.
  useEffect(() => {
    let frameId;
    let previousTime = 0;

    function animate(time) {
      if (!previousTime) previousTime = time;

      const dt = Math.min(time - previousTime, 32);
      previousTime = time;

      if (!lockedRef.current && balloonsRef.current.length) {
        balloonsRef.current = balloonsRef.current.map((b) => {
          let vx = b.vx;
          let vy = b.vy;

// تغییر جهت بسیار آرام
vx += random(-0.00008, 0.00008) * dt;
vy += random(-0.00008, 0.00008) * dt;

// سرعت بسیار کمتر
vx = Math.max(-0.01, Math.min(0.01, vx));
vy = Math.max(-0.01, Math.min(0.01, vy));
          let x = b.x + vx * dt;
          let y = b.y + vy * dt;

          // محدوده تقریبی بالن با توجه به ابعاد صفحه
          const minX = 7;
          const maxX = 93;
          const minY = 13;
          const maxY = 87;

          if (x < minX || x > maxX) {
            vx *= -1;
            x = Math.max(minX, Math.min(maxX, x));
          }

          if (y < minY || y > maxY) {
            vy *= -1;
            y = Math.max(minY, Math.min(maxY, y));
          }

          return { ...b, x, y, vx, vy };
        });

        // نرخ به‌روزرسانی رابط کاربری محدود است
        setBalloons([...balloonsRef.current]);
      }

      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);


function getAudioContext() {
  const AudioContextClass =
    window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) return null;

  if (!audioRef.current) {
    audioRef.current = new AudioContextClass();
  }

  return audioRef.current;
}

// صدای ملایم برای انتخاب اشتباه
function playWrongSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;

    osc.type = "sine";
    osc.frequency.setValueAtTime(330, now);
    osc.frequency.exponentialRampToValueAtTime(
      220,
      now + 0.22
    );

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.16, now + 0.025);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      now + 0.25
    );

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.27);
  } catch (error) {
    // بازی بدون صدا هم قابل اجراست.
  }
}


function startMusic() {
  const audio = musicRef.current;
  if (!audio) return;

  audio.play()
    .then(() => setMusicOn(true))
    .catch(() => setMusicOn(false));
}

function stopMusic() {
  const audio = musicRef.current;
  if (!audio) return;

  audio.pause();
  setMusicOn(false);
}

function toggleMusic() {
  if (musicOn) {
    stopMusic();
  } else {
    startMusic();
  }
}



function handleClick(balloon) {
  
  if (lockedRef.current || finished) return;

  // شروع موسیقی پس از اولین تعامل دانش‌آموز
  if (!musicRef.current || musicRef.current.paused) {
  startMusic();
}

  if (balloon.word !== target) {
    setMessage("این کلمه نیست! دوباره امتحان کن 😊");
    playWrongSound();
    return;
  }

  lockedRef.current = true;
  setPoppingId(balloon.id);
  setScore((previous) => previous + 1);
  setMessage("آفرین! پوففف! 💥🎉");

  playPopSound(audioRef);

  const pieces = createExplosion(balloon);
  setExplosions(pieces);

  timersRef.current.push(
    setTimeout(() => {
      balloonsRef.current = balloonsRef.current.filter(
        (b) => b.id !== balloon.id
      );
      setBalloons([...balloonsRef.current]);
      setPoppingId(null);
    }, 300)
  );

  timersRef.current.push(
    setTimeout(() => setExplosions([]), 720)
  );

  timersRef.current.push(
    setTimeout(() => {
      if (round >= rounds) {
        setFinished(true);
        setMessage("تبریک! بازی را تمام کردی! 🏆");
        stopMusic();
        return;
      }

      const nextRound = round + 1;
      setRound(nextRound);
      newRound(nextRound);
    }, 950)
  );
}


  function restartGame() {
    clearTimers();
    setScore(0);
    setRound(1);
    setFinished(false);
    newRound(1);
  }

  return (
    <>
      <style>{css}</style>

      <div className="balloon-game" dir="rtl">
        <div className="header">
          <h2 className="title">🎈 بازی بالن‌های کلمه‌ای</h2>

          <div className="stats">
            <span>⭐ امتیاز: {score}</span>
            <span>مرحله: {round} از {rounds}</span>
          </div>

<button
  type="button"
  onClick={toggleMusic}
  aria-pressed={musicOn}
  style={{
    padding: "9px 18px",
    margin: "0 auto 14px",
    border: "none",
    borderRadius: "18px",
    background: musicOn ? "#d9f7df" : "#ffffff",
    color: "#24345b",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  {musicOn ? "🔊 خاموش کردن موسیقی" : "🎵 پخش موسیقی"}
</button>

          <div className="target">
            <p>این کلمه را پیدا کن:</p>
            <strong>{target}</strong>
          </div>

          <p className="message" aria-live="polite">
            {message}
          </p>
        </div>

        <div className="sky">
          <div
            className="cloud"
            style={{ left: "8%", top: "8%" }}
          />
          <div
            className="cloud"
            style={{ left: "72%", top: "80%" }}
          />

          {balloons.map((balloon) => (
            <button
              key={balloon.id}
              type="button"
              className={[
                "word-balloon",
                poppingId === balloon.id ? "inflating" : "",
              ].join(" ")}
              style={{
                "--balloon-color": balloon.color,
                left: `${balloon.x}%`,
                top: `${balloon.y}%`,
              }}
              onClick={() => handleClick(balloon)}
              disabled={Boolean(poppingId) || finished}
              aria-label={`کلمه ${balloon.word}`}
            >
              <span className="balloon-word">
                {balloon.word}
              </span>
              <span className="knot" />
            </button>
          ))}

          {explosions.map((piece) => (
            <span
              key={piece.id}
              className={piece.sparkle ? "sparkle" : "shard"}
              style={
                piece.sparkle
                  ? {
                      "--spark-x": `${piece.x}%`,
                      "--spark-y": `${piece.y}%`,
                      "--spark-dx": `${piece.dx}px`,
                      "--spark-dy": `${piece.dy}px`,
                    }
                  : {
                      "--shard-x": `${piece.x}%`,
                      "--shard-y": `${piece.y}%`,
                      "--shard-color": piece.color,
                      "--shard-size": `${piece.size}px`,
                      "--shard-dx": `${piece.dx}px`,
                      "--shard-dy": `${piece.dy}px`,
                      "--shard-rotate": `${piece.rotate}deg`,
                    }
              }
            >
              {piece.sparkle ? "✦" : ""}
            </span>
          ))}

          {finished && (
            <div className="finish">
              <h3>🏆 آفرین قهرمان!</h3>
              <p>امتیاز نهایی: {score}</p>
              <button onClick={restartGame}>
                🔄 بازی دوباره
              </button>
            </div>
          )}
        </div>

        {!finished && (
          <button
            className="restart"
            onClick={restartGame}
          >
            شروع دوباره
          </button>
        )}
      </div>
    </>
  );
}
