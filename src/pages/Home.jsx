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
import { CarouselAlphaExp } from "../sections/alphabet/CarouselAlphaExp";

export default function Home() {
  return (<>
  <h4 className="bg-warning p-2 text-center rounded my-2 mx-1" style={{color:" #1a2099ff"}}>بچه ها حروف زیر را یاد بگیرند. لطفا از بچه ها بخواهید کارخانگی را هم بنویسند.</h4>
      {/* <ObjectSentenceGame/> */}
      {/* <SentenceObjecحروفt/> */}
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
    {/* <SyllableAppwithCategory category="ق"/> */}
    {/* <MatchingLettersPicturs/> */}
    {/* <BrokenGlass/> */}
    {/* <BouncingBalls/> */}

    {/* <div className="container  mt-4" dir="rtl">
      <DragWriteBoxWithGuides width={840} height={520} showGuides={true} downloadName="persian_practice.png" textTitle="آیلین و سِتایِش هَر روز با هَم بازی می کُنَند."/>
    </div> */}
    <CardAlphaCompo/> 
    <div className="my-4">
      <h4 className="my-4 text-center bg-info p-3 rounded">صداهای کوتاه</h4>
      <CarouselAlphaExp idCarouselAlpha="shorthref1"  dataCarousel="alphaShortCrousel"/>
    </div>

    {/* <div className="my-4">
      <h4 className="my-4 text-center bg-warning p-3 rounded">صداهای کشیده</h4>
      <CarouselAlphaExp idCarouselAlpha="longhref1"  dataCarousel="alphaLongCrousel"/>
    </div> */}
    {/* <ChooseWords/> */}
    {/* <div className="container text-center my-4">
      <div className="bg-info h5 p-4"> کارخانگی بچه ها: از روی حروف زیر هر کدام دو خط بنویسند</div>
      <img src={`${process.env.PUBLIC_URL}/images/homework/jjjj.png`} className="w-100" alt="" />
    </div> */}
    <div className="container text-center my-4">
      <div className="bg-info h5 p-4"> کارخانگی بچه ها: از روی کلمات زیر هر کدام چند بار بنویسند</div>
      <img src={`${process.env.PUBLIC_URL}/images/homework/rr.png`} className="w-100" alt="" />
    </div>
        <WordHouseGame/>

    {/* <MatchGame/> */}


    {/* <DragDropQuiz/> */}
  </>)
}
