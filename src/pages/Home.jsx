import React from "react";
import { CardAlphaCompo } from "../sections/alphabet/CardAlphaCompo";
import BrokenGlass from "../sections/alphabet/BrokenGlass";
import StoryPage3 from "../sections/story/StoryPage3";
import DragDropQuiz from "../sections/word/DragDropQuiz";
import BouncingBalls from "../sections/alphabet/BouncingBalls";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";
import WordFlipBox from "../sections/alphabet/WordFlipBox";
import VideoCard from "../sections/alphabet/VideoCard";
import DragWriteBoxWithGuides from "../sections/alphabet/DragWriteBoxWithGuides ";
import MatchingLettersPicturs from "../sections/alphabet/MatchingLettersPicturs";
import { SylabeWords } from "../sections/alphabet/SylabeWords";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import SentenceObject from "../sections/word/SentenceObject";
import TypingImageText from "../sections/word/TypingImageText";
import SentenceBuilder from "../sections/word/SentenceBuilder";
import SyllableAppwithCategory from "../sections/alphabet/SyllableAppwithCategory";
import MatchGame from "../sections/alphabet/MatchGame";
import ChooseWords from "../sections/alphabet/ChooseWords";
import WordHouseGame from "../sections/alphabet/WordHouseGame";

export default function Home() {
  return (<>
  <h4 className="bg-warning p-2 text-center rounded my-2 mx-1" style={{color:" #1a2099ff"}}>بچه ها امروز حرف الف را یاد گرفتند. حرف الف را بخوانند و مثال هاش را یاد بگیرند. همین طور فقط با صداهای کوتاه َ ِ ُ آشنا شدند. لطفا از بچه ها بخواهید یک خط حرف ا آ را بنویسند . همین طور کلمات بازی با واژگان را هم یاد بگیرند. .</h4>
      {/* <ObjectSentenceGame/> */}
      {/* <SentenceObject/> */}
      {/* <TypingImageText/> */}
      {/* <WordFlipBox/> */}
      {/* <SentenceBuilder/> */}
        {/* <SylabeWords/> */}
      {/* <VideoCard
        title="قصه کوتاه امروز"
        description="متن فارسی داستان زیر را بخوانید."
        videoFileName={`${process.env.PUBLIC_URL}/video/fox&crew.mp4`}  // فقط اسم فایل ویدیوی mp4
      /> */}
    {/* <StoryPage3 groupKey="alefba" wantedTitle="گُربِه‌ی کُوچِک" /> */}
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
    {/* <MatchGame/> */}
    {/* <SyllableAppwithCategory category="ق"/> */}
    {/* <MatchingLettersPicturs/> */}
    {/* <BrokenGlass/> */}
    {/* <BouncingBalls/> */}

    {/* <div className="container  mt-4" dir="rtl">
      <DragWriteBoxWithGuides width={840} height={520} showGuides={true} downloadName="persian_practice.png" textTitle="آیلین و سِتایِش هَر روز با هَم بازی می کُنَند."/>
    </div> */}
    {/* <WordHouseGame/> */}
    <CardAlphaCompo/> 
    <ChooseWords/>
    {/* <DragDropQuiz/> */}
  </>)
}
