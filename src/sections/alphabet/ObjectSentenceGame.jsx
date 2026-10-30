import React, { useEffect, useState } from 'react';


const questions1 = [
  {
    image: 'https://thumbs.dreamstime.com/b/pencil-character-facial-expressions-19965263.jpg',
    correct: '.این یِک مِداد اَست',
    options: ['.این یِک کِتاب اَست', '.این یِک صَندَلی اَست', '.این یِک مِداد اَست'],
    word: 'مِداد',
    meaning: 'pencil'
  },
  {
    image: 'https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png',
    correct: '.مَن کِتاب دارَم',
    options: ['.مَن مِداد دارَم', '.مَن کِتاب دارَم', '.او صَندَلی دارَد'],
    word: 'کِتاب',
    meaning: 'book'
  },
  {
    image: 'https://s3.envato.com/files/295931587/preview1.jpg',
    correct: '.او کیف دارَد',
    options: ['.او دَفتَر دارَد', '.او کیف دارَد', '.او صَندَلی دارَد'],
    word: 'کیف',
    meaning: 'bag'
  },
  {
    image: 'https://www.shutterstock.com/image-vector/illustration-timer-clock-design-hand-260nw-2328107837.jpg',
    correct: 'حالا نوبَتِ توست.',
    options: ['حالا نوبَتِ توست.', 'حالا نوبَتِ مَن اَست.', 'حالا نوبَت آنها اَست.'],
    word: 'نوبَت',
    meaning: 'turn'
  },
  {
    image: 'https://img.freepik.com/premium-vector/school-age-boy-looking-moon-flat-style-vector-illustration_1332465-15978.jpg',
    correct: 'بَچِه بِه ماه نِگاه کَرد',
    options: ['بَچِه بِه جَنگَل نِگاه کَرد', 'بَچه بِه دَریا نِگاه کَرد', 'بَچِه بِه ماه نِگاه کَرد'],
    word: 'ماه',
    meaning: 'moon'
  },
  {
    image: 'https://static.vecteezy.com/system/resources/previews/030/688/870/non_2x/juice-2d-cartoon-vector-illustration-on-white-background-h-free-photo.jpg',
    correct: 'مَن آبمیوِه دوست دارَم',
    options: ['مَن پیتزا دوست دارَم', 'مَن آبمیوِه دوست دارَم', 'مَن نانِ تازِه دوست دارَم'],
    word: 'آبمیوِه',
    meaning: 'juice'
  },
  {
    image: 'https://previews.123rf.com/images/microone/microone2208/microone220800180/190481157-students-in-classroom-student-behaviour-pupils-sitting-at-desks-on-lesson-school-college-children.jpg',
    correct: 'کِلاس شِش نَفَر شاگِرد دارَد',
    options: ['کِلاس شِش نَفَر شاگِرد دارَد', 'ما دَر وَرزِشگاه وَرزِش می کُنیم', 'مادَر در فُروشگاه است'],
    word: 'کِلاس',
    meaning: 'classroom'
  },
  {
    image: 'https://thumbs.dreamstime.com/b/cartoon-shoes-icon-19180433.jpg',
    correct: 'مَن کَفشِ نو خَریدَم',
    options: ['مَن یِک آیپَد خَریدَم', 'مَن کَفشِ نو خَریدَم', 'مَن چَند دَفتَر خَریدَم'],
    word: 'کَفش',
    meaning: 'shoes'
  },
  {
    image: 'https://thumbs.dreamstime.com/b/baby-crying-next-to-worried-mother-vector-illustration-newborn-tears-desperate-new-mom-trying-calm-him-down-147979328.jpg',
    correct: 'مادَر نِگُران بَرادَرم بود',
    options: ['مادر با بَرادَر خندید', 'مادَر برای بَرادَرم خوراکی خَرید', 'مادَر نِگُران بَرادَرم بود'],
    word: 'نِگُران',
    meaning: 'worried'
  },
  {
    image: 'https://www.shutterstock.com/image-vector/vector-illustration-happy-children-playing-600nw-1099688924.jpg',
    correct: 'خانِه ما نَزدیک پارک اَست',
    options: ['خانِه ما نَزدیک پارک اَست', 'خانِه ما اَز کِتابخانِه دور اَست', 'خانِه ما به مَکتَب نَزدیک اَست'],
    word: 'پارک',
    meaning: 'park'
  },
  {
    image: 'https://ik.imagekit.io/storybird/images/d553bf69-ddfe-4d2c-b683-e7ddde9acced/1_79727818.webp?tr=q-80',
    correct: 'آتَش نِشان کودَک را نِجات داد',
    options: ['رانَنده کودَکان را به مَکتَب بُرد', 'دُکتر کودَک را جَراحی کَرد', 'آتَش نِشان کودَک را نِجات داد'],
    word: 'آتَش‌نِشان',
    meaning: 'firefighter'
  },
  {
    image: 'https://t3.ftcdn.net/jpg/13/23/10/74/360_F_1323107457_M22cjnt1yOTcDkMgzONR7Te37HyRdTGg.jpg',
    correct: 'این اَنگُشتَر اَز طَلا اَست',
    options: ['این اَنگُشتَر اَز طَلا اَست', 'این گوشوارِه اَست', 'این یِک اَلَنگو اَست'],
    word: 'اَنگُشتَر',
    meaning: 'ring'
  },
  {
    image: 'https://icon2.cleanpng.com/ci3/uvn/sbz/ad84tyi8n.webp',
    correct: 'او اَز نَردِبان بالا رَفت',
    options: ['اَمین اَز دِرَخت بالا رَفت', 'مَن از کوه بالا رَفتَم', 'او اَز نَردِبان بالا رَفت'],
    word: 'نَردِبان',
    meaning: 'ladder'
  },
]
// const action1 =[
//   {
//     image: 'https://thumbs.dreamstime.com/b/illustration-cute-little-boy-eating-red-apple-isolated-white-background-kid-eats-red-apple-good-appetite-healthy-331433166.jpg',
//     correct: 'بَچِه سیب می‌خورَد',
//     options: ['بَچِه توپ بازی می‌کُنَد', 'بَچِه سیب می‌خورَد', 'بَچِه می‌خوابَد'],
//     word: 'سیب',
//     meaning: 'apple'
//   },
//   {
//     image: 'https://img.freepik.com/premium-vector/cute-boy-eating-ramen-noodle-cartoon-vector-icon-illustration-people-food-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3943.jpg',
//     correct: 'پَسر نودِل می‌خورَد',
//     options: ['پَسر خَوابیده اَست', 'پَسر نودِل می‌خورَد', 'پَسر می‌دَوَد'],
//     word: 'نودِل',
//     meaning: 'noodle'
//   },
//   {
//     image: 'https://cdn.vectorstock.com/i/500p/93/71/young-cartoon-student-writing-vector-1149371.jpg',
//     correct: 'اِلیاس دَر حال نِوِشتَن اَست',
//     options: ['اِلیاس دَر حال نِوِشتَن اَست', 'اِلیاس دَر حال خَواب اَست', 'اِلیاس دَر حال دویدن اَست'],
//     word: 'نِوِشتَن',
//     meaning: 'writing'
//   },
//   {
//     image: 'https://png.pngtree.com/png-clipart/20241106/original/pngtree-happy-girl-reading-book-clipart-illustration-png-image_16698789.png',
//     correct: 'اِلناز دَر حالِ خواندَن اَست',
//     options: ['اِلناز دَر حالِ خواندَن اَست', 'اِلناز دَر حالِ نِوِشتَن اَست', 'اِلناز دَر حالِ نِشِستن اَست'],
//     word: 'خواندَن',
//     meaning: 'reading'
//   },
//   {
//     image: 'https://png.pngtree.com/png-clipart/20241128/original/pngtree-the-little-cartoon-girl-drinks-water-png-image_17338893.png',
//     correct: 'ثَنا آب می‌نوشَد',
//     options: ['ثَنا آب می‌نوشَد', 'ثَنا با دوستَش حَرف می‌زَنَد', 'ثَنا نِقاشی می‌کِشَد'],
//     word: 'آب',
//     meaning: 'water'
//   },
//   {
//     image: 'https://media.craiyon.com/2025-04-27/RGZNQMV3TySXtvyvna7Ahg.webp',
//     correct: 'رایان فوتبَال بازی می‌کُنَد',
//     options: ['رایان کتاب می‌خوانَد', 'رایان فوتبَال بازی می‌کُنَد', 'رایان دَر آشپَزخانه اَست'],
//     word: 'فوتبَال',
//     meaning: 'football'
//   },
//   {
//     image: 'https://thumb.ac-illust.com/8b/8bf2db3079bb61f16432d86299f3678f_t.jpeg',
//     correct: 'بَهار پَنجَره را پاک می‌کُنَد',
//     options: ['بَهار پَنجَره را پاک می‌کُنَد', 'بَهار دَرس می‌خوانَد', 'بَهار رَنگ می‌کِشَد'],
//     word: 'پَنجَره',
//     meaning: 'window'
//   },
//   {
//     image: 'https://i.etsystatic.com/17675358/r/il/418fd2/3470834387/il_fullxfull.3470834387_pf6y.jpg',
//     correct: 'مِلیکا بستَنی می‌خورَد',
//     options: ['مِلیکا بستَنی می‌خورَد', 'مِلیکا می‌نویسَد', 'مِلیکا می‌شوید'],
//     word: 'بستَنی',
//     meaning: 'ice cream'
//   },
//   {
//     image: 'https://thumb.ac-illust.com/43/43eb28381357d2977d672e2f1cadc1a1_t.jpeg',
//     correct: 'هِلیا دَر حالِ شُست‌وشو اَست',
//     options: ['هِلیا دَر حالِ بازی اَست', 'هِلیا دَر حالِ خَواب اَست', 'هِلیا دَر حالِ شُست‌وشو اَست'],
//     word: 'شُست‌وشو',
//     meaning: 'washing'
//   },
//   {
//     image: 'https://www.shutterstock.com/image-vector/cute-family-feeding-cats-vectorchildren-260nw-2336242187.jpg',
//     correct: 'بابا گُربه را غذا می‌دَهَد',
//     options: ['بابا گُربه را غذا می‌دَهَد', 'بابا با گُربه می‌دوَد', 'بابا گُربه را می‌شوید'],
//     word: 'گُربه',
//     meaning: 'cat'
//   },
//    {
//     image: 'https://png.pngtree.com/png-clipart/20241114/original/pngtree-cute-cartoon-boy-brushing-his-teeth-clipart-illustration-png-image_17057243.png',
//     correct: 'مُرتِضی دَندان‌هایش را مِسواک می‌زَنَد',
//     options: ['مُرتِضی دَندان‌هایش را مِسواک می‌زَنَد', 'مُرتِضی دَر حالِ بازی اَست', 'مُرتِضی مِی‌خوانَد'],
//     word: 'مِسواک',
//     meaning: 'toothbrush'
//   },
//   {
//     image: 'https://thumbs.dreamstime.com/b/happy-cute-little-kid-girl-jump-bed-room-172532649.jpg',
//     correct: 'مُرسَل دَرحالِ پَریدَن اَست',
//     options: ['مُرسَل دَرحالِ پَریدَن اَست', 'مُرسَل دَرحالِ خوابیدن اَست', 'مُرسَل دَرحالِ نوشیدَن اَست'],
//     word: 'پَریدَن',
//     meaning: 'jumping'
//   },
//   {
//     image: 'https://st5.depositphotos.com/20923550/70471/v/450/depositphotos_704711734-stock-illustration-cartoon-little-boy-running-park.jpg',
//     correct: 'یوسُف می‌دَوَد',
//     options: ['یوسُف می‌دَوَد', 'یوسُف می‌خوانَد', 'یوسُف می‌نوشَد'],
//     word: 'دویدن',
//     meaning: 'running'
//   },
//   {
//     image: 'https://i.pinimg.com/736x/91/82/32/91823265f2fc00bd4d91098767bf13cb.jpg',
//     correct: 'ایلیا خوابیده اَست',
//     options: ['ایلیا خوابیده اَست', 'ایلیا می‌دَوَد', 'ایلیا می‌خورد'],
//     word: 'خوابیدن',
//     meaning: 'sleeping'
//   },
//   {
//     image: 'https://png.pngtree.com/png-clipart/20240725/original/pngtree-cute-happy-baby-holding-milk-bottle-cartoon-vector-png-image_15631056.png',
//     correct: 'رایان شیر می‌نوشَد',
//     options: ['رایان شیر می‌نوشَد', 'رایان بازی می‌کُنَد', 'رایان کتاب می‌خوانَد'],
//     word: 'شیر',
//     meaning: 'milk'
//   }
// ];


// const weather = [
//   {
//     image: 'https://static.vecteezy.com/system/resources/previews/007/637/871/non_2x/cute-summer-sunny-day-weather-character-smiling-with-clouds-in-yellow-background-illustration-vector.jpg',
//     correct: '.هَوا آفتابی اَست',
//     options: ['.هَوا آفتابی اَست', '.هَوا بارانی اَست', '.هَوا بادی اَست'],
//     word: 'آفتابی',
//     meaning: 'sunny'
//   },
//   {
//     image: 'https://img.freepik.com/free-vector/nature-raining-scene_1308-22369.jpg',
//     correct: '.هَوا بارانی اَست',
//     options: ['.هَوا بَرفی اَست', '.هَوا بارانی اَست', '.هَوا گَرم اَست'],
//     word: 'بارانی',
//     meaning: 'rainy'
//   },
//   {
//     image: 'https://thumbs.dreamstime.com/b/cold-weather-boy-freezing-shivering-young-winter-cartoon-style-illustration-landscape-115782671.jpg',
//     correct: '.هَوا سَرد و بَرفی اَست',
//     options: ['.هَوا گَرم اَست', '.هَوا سَرد و بَرفی اَست', '.هَوا بارانی اَست'],
//     word: 'بَرفی',
//     meaning: 'snowy'
//   },
//   {
//     image: 'https://t3.ftcdn.net/jpg/07/25/45/18/360_F_725451899_HXqF8T8cUpTdg8DyhfVu1Qle0jhvJPH5.jpg',
//     correct: '.هَوا بادی اَست',
//     options: ['.هَوا بادی اَست', '.هَوا آفتابی اَست', '.هَوا بَرفی اَست'],
//     word: 'بادی',
//     meaning: 'windy'
//   },
//   {
//     image: 'https://www.shutterstock.com/image-vector/person-suffering-summer-sun-heat-600nw-2356554209.jpg',
//     correct: '.هَوا گَرم اَست',
//     options: ['.هَوا گَرم اَست', '.هَوا سَرد اَست', '.هَوا بارانی اَست'],
//     word: 'گَرم',
//     meaning: 'hot'
//   },
//   {
//     image: 'https://img.freepik.com/free-photo/anime-style-clouds_23-2151071731.jpg?semt=ais_hybrid&w=740',
//     correct: '.آسمان اَبری اَست',
//     options: ['.آسمان آبی اَست', '.آسمان اَبری اَست', '.آسمان روشن اَست'],
//     word: 'اَبری',
//     meaning: 'cloudy'
//   },
//   {
//     image: 'https://t3.ftcdn.net/jpg/03/22/97/22/360_F_322972200_yN6Lz4k7uLZAnOs3pt3ODmLL0vHgBUJ0.jpg',
//     correct: '.توفان آمدِه اَست',
//     options: ['.توفان آمدِه اَست', 'هَوا بَرفی اَست.', '.خورشید دَر آسمان اَست'],
//     word: 'توفان',
//     meaning: 'storm'
//   },
//   {
//     image: 'https://st4.depositphotos.com/31862216/38693/v/450/depositphotos_386930238-stock-illustration-beautiful-rainbow-sky-paper-art.jpg',
//     correct: '.رَنگین‌کَمان در آسمان اَست',
//     options: ['.اَبَر در آسمان نیست', '.رَنگین‌کَمان در آسمان اَست', '.خورشید پُشت کوه اَست'],
//     word: 'رَنگین‌کَمان',
//     meaning: 'rainbow'
//   },
//   {
//     image: 'https://www.shutterstock.com/image-photo/children-a-boy-girl-aged-260nw-2639401605.jpg',
//     correct: '.رَعد و بّرق در آسمان اَست',
//     options: ['.باران مِی‌بارد', '.رَعد و بّرق در آسمان اَست', '.باد آرام اَست'],
//     word: 'رَعد و بّرق',
//     meaning: 'thunder and lightning'
//   },
//   {
//     image: 'https://img.freepik.com/free-vector/dirt-road-foggy-forest-dull-weather-cartoon-nature-landscape-with-road-going-along-field-coni_107791-7449.jpg',
//     correct: '.هَوا مِه‌آلود اَست',
//     options: ['.هَوا روشَن اَست', '.هَوا مِه‌آلود اَست', '.هَوا گَرم و خُشک اَست'],
//     word: 'مِه‌آلود',
//     meaning: 'foggy'
//   }
// ];


// const illnessSignsQuestions = [
//   {
//     image: 'https://media.istockphoto.com/id/598785430/vector/sick-girl-in-bed.jpg?s=612x612&w=0&k=20&c=sp_1S46NAWTwVYfiln8cv6sKc-PJNT-HR54GNeryy5Q=',
//     correct: '.او تَب دارَد',
//     options: ['.او تَب دارَد', '.او می‌خَندَد', '.او گُرُسنه اَست'],
//     word: 'تَب',
//     meaning: 'Fever '
//   },
//   {
//     image: 'https://www.shutterstock.com/image-vector/boys-people-suffering-various-symptoms-260nw-1658168074.jpg',
//     correct: '.او سُرفه می‌کُنَد',
//     options: ['.او می‌دَوَد', '.او سُرفه می‌کُنَد', '.او بازی می‌کُنَد'],
//     word: 'سُرفه',
//     meaning: 'Cough '
//   },
//   {
//     image: 'https://clipart-library.com/images/pi76rXxi9.jpg',
//     correct: '.او حالِ خوبی نَدارَد',
//     options: ['.او حالِ خوبی دارَد', '.او خوشحال اَست', '.او حالِ خوبی نَدارَد'],
//     word: 'حالِ بد',
//     meaning: 'Feeling unwell or sick'
//   },
//   {
//     image: 'https://www.shutterstock.com/image-vector/child-has-got-flu-sneezing-600nw-216852040.jpg',
//     correct: '.او عَطسِه می‌کُنَد',
//     options: ['.او عَطسِه می‌کُنَد', '.او آواز می‌خوانَد', '.او می‌خوابَد'],
//     word: 'عَطسِه',
//     meaning: 'Sneezing '
//   },
//   {
//     image: 'https://img.freepik.com/free-vector/hand-drawn-headache-cartoon-illustration_23-2150696197.jpg',
//     correct: '.او سَردَرد دارَد',
//     options: ['.او سَردَرد دارَد', '.او دَست‌ دَرد دارَد', '.او خوشحال اَست'],
//     word: 'سَردَرد',
//     meaning: 'Headache'
//   },
//   {
//     image: 'https://c8.alamy.com/comp/2B7XEMH/a-child-is-showing-symptoms-of-a-sore-throat-or-covid-19-hand-drawn-vector-illustration-2B7XEMH.jpg',
//     correct: '.او گَلودَرد دارَد',
//     options: ['.او پا دَرد دارَد', '.او خوابیده اَست', '.او گَلودَرد دارَد'],
//     word: 'گَلودَرد',
//     meaning: 'Sore throat'
//   },
//   {
//     image: 'https://www.shutterstock.com/image-vector/vector-illustration-little-boy-suffering-600nw-1582302751.jpg',
//     correct: '.او شِکم‌دَرد دارَد',
//     options: ['.او دَست دَرد دارَد', '.او شِکم‌دَرد دارَد', '.او دَندان دَرد دارَد'],
//     word: 'شِکم‌دَرد',
//     meaning: 'Stomachache '
//   },
//   {
//     image: 'https://previews.123rf.com/images/colorfuelstudio/colorfuelstudio2104/colorfuelstudio210400194/167735574-young-good-looking-woman-feeling-tired-and-sick.jpg',
//     correct: '.او خَستِه اَست',
//     options: ['.او بیدار اَست', '.او تَب دارَد', '.او خَستِه اَست'],
//     word: 'خَستِه',
//     meaning: 'Tired '
//   },
//   {
//     image: 'https://previews.123rf.com/images/ruangdesign19/ruangdesign191909/ruangdesign19190900013/129710506-cartoon-child-toothache-vector-illustration.jpg',
//     correct: '.او دَندان‌دَرد دارَد',
//     options: ['.او دَندان‌دَرد دارَد', '.او گوش‌ دَرد دارَد', '.او خوابَش می‌آیَد'],
//     word: 'دَندان‌دَرد',
//     meaning: 'Toothache'
//   },
//   {
//     image: 'https://www.shutterstock.com/image-vector/earache-sore-boy-sick-person-600nw-1671298501.jpg',
//     correct: '.او گوش‌دَرد دارَد',
//     options: ['.او گوش‌دَرد دارَد', '.او شِکم‌دَرد دارَد', '.او حالِ خوب دارَد'],
//     word: 'گوش‌دَرد',
//     meaning: 'Earache '
//   },
//   {
//     image: 'https://media.istockphoto.com/id/1423379495/vector/girl-sweating-sunny-day-cute-child.jpg?s=612x612&w=0&k=20&c=FU0s8UF13Ms0UaOVXG5RUr3iWukOirvKnhdf1SZ7Xss=',
//     correct: '.او عَرَق می‌کُنَد',
//     options: ['.او لَبخَند می‌زَنَد', '.او عَرَق می‌کُنَد', '.او دَر راه اَست'],
//     word: 'عَرَق',
//     meaning: 'Sweat '
//   },
//   {
//     image: 'https://png.pngtree.com/png-clipart/20250210/original/pngtree-a-runny-nose-for-a-child-png-image_20412369.png',
//     correct: '.بینیِ او گِرفتِه اَست',
//     options: ['.او بینی نَدارَد', '.او دَندان دَرد دارَد', '.بینیِ او گِرفتِه اَست'],
//     word: 'گرفتگی بینی',
//     meaning: 'Nasal congestion'
//   },
//   {
//     image: 'https://www.shutterstock.com/image-vector/little-kid-feel-tired-low-260nw-2524893147.jpg',
//     correct: '.او نیرویی نَدارَد',
//     options: ['.او دَرس می‌خوانَد', '.او نیرویی نَدارَد', '.او تَشنه اَست'],
//     word: 'بی‌نیرویی',
//     meaning: 'Fatigue'
//   },
//   {
//     image: 'https://t.pimg.jp/084/974/769/1/84974769.jpg',
//     correct: '.او روی تَخت دراز کِشیدِه اَست',
//     options: ['.او روی تَخت دراز کِشیدِه اَست', '.او بازی می‌کُنَد', '.او می‌دَوَد'],
//     word: 'دراز کشیدن',
//     meaning: 'Lying down '
//   },
//   {
//     image: 'https://cdn.motherhood.com.my/wp-content/uploads/2022/04/14190652/child-eat-medicine.png',
//     correct: '.او دارو می‌خورَد',
//     options: ['.او میوه می‌خورَد', '.او آب می‌خورَد', '.او دارو می‌خورَد'],
//     word: 'دارو',
//     meaning: 'Medicine'
//   }
// ];
// const pantry = [
//   {
//     image: 'https://c8.alamy.com/comp/FTRH8J/freehand-drawn-cartoon-sugar-bowl-FTRH8J.jpg',
//     correct: '.این شِکَر اَست',
//     options: ['.این آرد اَست', '.این شِکَر اَست', '.این نَمَک اَست'],
//     word: 'شِکَر',
//     meaning: 'sugar'
//   },
//   {
//     image: 'https://media.istockphoto.com/id/1314024818/vector/bag-of-wheat-flour-vector-isolated-illustration.jpg?s=612x612&w=0&k=20&c=XNUjV5muckg8HhKIUNAcj_mRmqLcUharUvFRN4macxo=',
//     correct: '.این آرد اَست',
//     options: ['.این آرد اَست', '.این روغَن اَست', '.این شِکَر اَست'],
//     word: 'آرد',
//     meaning: 'flour'
//   },
//   {
//     image: 'https://media.istockphoto.com/id/1333049606/vector/salt-sprinkling-man-holds-salt-in-hand-salt-the-culinary-dish.jpg?s=612x612&w=0&k=20&c=FFMga7Vsw8odhYTzdty4ZeSvMAgsOa7RRoQP91n2SOg=',
//     correct: '.این نَمَک اَست',
//     options: [ '.این فِلفِل اَست','.این نَمَک اَست', '.این آرد اَست'],
//     word: 'نَمَک',
//     meaning: 'salt'
//   },
//   {
//     image: 'https://c8.alamy.com/comp/2EGHFA5/natural-oil-cartoon-poster-with-fresh-vegetarian-ingredient-green-olive-fruit-branch-corn-vegetable-and-sunflower-with-bottle-of-organic-oil-for-foo-2EGHFA5.jpg',
//     correct: '.این روغَن اَست',
//     options: [ '.این نَمَک اَست','.این روغَن اَست', '.این آرد اَست'],
//     word: 'روغَن',
//     meaning: 'oil'
//   },
//   {
//     image: 'https://img.freepik.com/premium-photo/hand-drawn-cartoon-delicious-pasta-illustration_561641-9274.jpg',
//     correct: '.این پاستا اَست',
//     options: ['.این پاستا اَست', '.این آرد اَست', '.این نان اَست'],
//     word: 'پاستا',
//     meaning: 'pasta'
//   },
//   {
//     image: 'https://img.freepik.com/premium-vector/cartoon-bowl-rice-illustration-vector-cute-food-character-design_1322206-51427.jpg',
//     correct: '.این بِرنج اَست',
//     options: [ '.این شِکَر اَست', '.این نَمَک اَست','.این بِرنج اَست',],
//     word: 'بِرنج',
//     meaning: 'rice'
//   },
//   {
//     image: 'https://img.pikbest.com/png-images/20250105/-coffee-love-foam-with-beans-cartoon-icon-illustration-cofee-vector_11340750.png!sw800',
//     correct: '.این قَهوه اَست',
//     options: ['.این چای اَست', '.این قَهوه اَست', '.این شِکَر اَست'],
//     word: 'قَهوه',
//     meaning: 'coffee'
//   },
//   {
//     image: 'https://img.freepik.com/premium-photo/hot-tea-cup-cartoon-isolated-white-background-v-61-job-id-01b3b1726072496684962110a8afc6a0_1067267-7161.jpg',
//     correct: '.این چای اَست',
//     options: ['.این چای اَست', '.این قَهوه اَست', '.این آب اَست'],
//     word: 'چای',
//     meaning: 'tea'
//   },
//   {
//     image: 'https://media.istockphoto.com/id/2197401679/vector/cartoon-cereal-products-flour-rice-or-wheat-grains-for-bread-bakery-product-ripe-seeds.jpg?s=612x612&w=0&k=20&c=MwlGoYjckKNyJbGl5PxyjNjp6jfCTIRTh7tdsUrsFFY=',
//     correct: '.این غَلات اَست',
//     options: [ '.این پاستا اَست', '.این نان اَست','.این غَلات اَست',],
//     word: 'غَلات',
//     meaning: 'cereal/grains'
//   },
//   {
//     image: 'https://media.istockphoto.com/id/690350566/vector/different-cookies-in-cartoon-style-vector-icons-set-isolate-on-white.jpg?s=612x612&w=0&k=20&c=vIKMpCZFneWjCNn66RBRGTfqhfFnlgM62f-twNLYrK0=',
//     correct: '.این بیسکویت اَست',
//     options: ['.این بیسکویت اَست', '.این نان اَست', '.این پاستا اَست'],
//     word: 'بیسکویت',
//     meaning: 'biscuit/cookie'
//   },
//   {
//     image: 'https://t3.ftcdn.net/jpg/08/21/11/64/360_F_821116418_RxoS6NXGpIVVbQM5AaaBTXEB4yMmhOmX.jpg',
//     correct: '.این عَسَل اَست',
//     options: ['.این شِکَر اَست', '.این عَسَل اَست', '.این روغَن اَست'],
//     word: 'عَسَل',
//     meaning: 'honey'
//   },
//   {
//     image: 'https://static.vecteezy.com/system/resources/previews/014/326/978/non_2x/spice-shop-with-different-hot-spices-condiment-exotic-fresh-seasoning-and-traditional-herbs-in-flat-cartoon-hand-drawn-templates-illustration-vector.jpg',
//     correct: '.این اَدویِه اَست',
//     options: [ '.این بَرنَج اَست','.این اَدویِه اَست', '.این روغَن اَست'],
//     word: 'اَدویِه',
//     meaning: 'spices'
//   },
//   {
//     image: 'https://media.istockphoto.com/id/1062795532/vector/set-of-tin-food.jpg?s=612x612&w=0&k=20&c=AS23uQ1RNPZSU5pAwWKw6tJzNIfkmfFOUYJKHbOQoR0=',
//     correct: '.این کُنسرو اَست',
//     options: ['.این کُنسرو اَست', '.این پاستا اَست', '.این نان اَست'],
//     word: 'کُنسرو',
//     meaning: 'canned food'
//   },
//   {
//     image: 'https://media.istockphoto.com/id/503455552/vector/nuts-isolated-on-white-background-cartoon-vector-icon.jpg?s=612x612&w=0&k=20&c=Bcp6PLExbsM8L9XY2Kqn6dLc9ZRdEmn2tj7UgckklAk=',
//     correct: '.این آجیل اَست',
//     options: ['.این آجیل اَست', '.این بَرنَج اَست', '.این بیسکویت اَست'],
//     word: 'آجیل',
//     meaning: 'nuts'
//   },
//   {
//     image: 'https://img.freepik.com/premium-vector/hand-drawn-cartoon-strawberry-jam-illustration_561641-3782.jpg',
//     correct: '.این مُربّا اَست',
//     options: [, '.این عَسَل اَست', '.این روغَن اَست','.این مُربّا اَست'],
//     word: 'مُربّا',
//     meaning: 'jam'
//   },
// ];





const ObjectSentenceGame = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [questions, setQuestions] = useState(questions1);
  const [idModal, setIdModal] = useState("questions1");
  const [showMeaning, setShowMeaning] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    const isCorrect = option === questions[current].correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setShowMeaning(true);
    }

    setTimeout(() => {
      setSelected("");
      setShowMeaning(false);
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        setIsFinished(true);
      }
    }, 4000);
  };

  const resetGame = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setIsFinished(false);
    setShowMeaning(false);
  };

  const progress = (current / questions.length) * 100;

  const stylebg = {
    backgroundColor: "#fffae6",
    borderRadius: "15px",
  };

  const questionsqq = (e, i) => {
    setQuestions(e);
    setIdModal(i);
    setCurrent(0);
    setSelected("");
    setScore(0);
    setIsFinished(false);
    setShowMeaning(false);
  };

  return (
    <div
      className="mt-5 text-center border border-3 border-info py-5 shadow-lg"
      style={{ borderRadius: "25px", backgroundColor: "#fff3cd" }}
    >
      {/* Start modal */}
      <div className="p-3">
        <button
          type="button"
          className="btn btn-lg btn-info fw-bold shadow"
          data-bs-toggle="modal"
          data-bs-target={"#" + idModal}
          style={{ borderRadius: "50px" }}
        >
          📚 فهرست
        </button>
        <div
          className="modal fade"
          id={idModal}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{ backgroundColor: "#ffeb99" }}
              >
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <h1 className="modal-title fs-5 fw-bold">📖 فهرست مطالب</h1>
              </div>
              <div className="modal-body">
                <div className="d-flex flex-wrap">
                  <button
                    className="btn shadow-sm border mx-2 fw-bold"
                    style={stylebg}
                    onClick={() => questionsqq(questions1, "question1")}
                  >
                    🎯 اشیا 
                  </button>
                  {/* <button
                    className="btn shadow-sm border mx-2 fw-bold"
                    style={stylebg}
                    onClick={() => questionsqq(action1, "question1")}
                  >
                    🎯 فعالیت ها 
                  </button> */}
                  {/* <button
                    className="btn shadow-sm border mx-2 fw-bold"
                    style={stylebg}
                    onClick={() => questionsqq(weather, "question2")}
                  >
                    🎯 آب و هوا
                  </button> */}
                  {/* <button
                    className="btn shadow-sm border mx-2 fw-bold"
                    style={stylebg}
                    onClick={() => questionsqq(illnessSignsQuestions, "question3")}
                  >
                    🎯 بیماری ها
                  </button> */}
                  {/* <button
                    className="btn shadow-sm border mx-2 fw-bold"
                    style={stylebg}
                    onClick={() => questionsqq(illnessSignsQuestions, "question4")}
                  >
                    🎯انبار آشپرخانه
                  </button> */}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-3 text-primary fw-bold" style={{ fontFamily: "Comic Sans MS" }}>
        🏆 جمله‌سازی با تصویر
      </h2>

      {isFinished ? (
        <>
          <h3 className="text-success mb-4 fw-bold">🎉 بازی تمام شد!</h3>
          <h4 className="mb-4">
            امتیاز نهایی: {score} از {questions.length} 🌟
          </h4>
          <button
            className="btn btn-warning btn-lg shadow"
            style={{ borderRadius: "50px" }}
            onClick={resetGame}
          >
            🔁 شروع دوباره
          </button>
        </>
      ) : (
        <>
          <div className="mb-3">
            <strong>⭐ امتیاز: {score}</strong> از {questions.length}
          </div>

          <div className="progress mb-4" style={{ height: "25px", borderRadius: "20px" }}>
            <div
              className="progress-bar bg-success fw-bold"
              role="progressbar"
              style={{ width: `${progress}%`, borderRadius: "20px" }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {Math.round(progress)}%
            </div>
          </div>
          <div className='row'>
            <div
              className="container shadow-sm border p-2 mb-3 col-12 "
              style={{
                width: "600px",
                height: "400px",
                borderRadius: "20px",
                backgroundColor: "#e0f7fa",
              }}
            >
              <img
                src={questions[current].image}
                alt="object"
                className="img-thumbnail"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  border: "5px solid #ffccbc",
                }}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            {questions[current].options.map((opt, index) => (
              <button
                key={index}
                className={`btn h1 m-2 col-10 col-md-4 shadow fw-bold ${
                  selected
                    ? opt === questions[current].correct
                      ? "btn-success"
                      : opt === selected
                      ? "btn-danger"
                      : "btn-secondary"
                    : "btn-outline-primary"
                }`}
                style={{
                  borderRadius: "50px",
                  fontFamily: "Comic Sans MS",
                  fontSize: "1.5rem",
                }}
                onClick={() => handleAnswer(opt)}
                disabled={!!selected}
              >
                {opt}
              </button>
            ))}
          </div>

          {showMeaning && (
            <div
              className="alert alert-success mt-4 fw-bold shadow-lg"
              style={{
                fontSize: "1.3rem",
                borderRadius: "15px",
                fontFamily: "Comic Sans MS",
                backgroundColor: "#d1f2eb",
              }}
            >
              ✅ {questions[current].word} = {questions[current].meaning}
            </div>
          )}

          <div className="mt-4">
            <button
              className="btn btn-warning btn-lg shadow"
              style={{ borderRadius: "50px" }}
              onClick={resetGame}
            >
              🔄 ریست بازی
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ObjectSentenceGame;



