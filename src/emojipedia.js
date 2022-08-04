const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id: "4",
    emoji: "😀",
    name: "Grinning Face",
    meaning: "The happy smiling face is one of the most common emojis and universally applicable: you just want to say hello, express joy or excitement about something or brighten up a short text."
  },
  {
    id: "5",
    emoji: "😃 ",
    name: "Smiling Face With Open Mouth",
    meaning: "Typical smiley face with open mouth and oval eyes. Is in a positive mood, shows its teeth and laughs cheerfully. Expresses enthusiasm: from a cheerful greeting to boundless joy."
  },
  {
    id: "6",
    emoji: "😄",
    name: "Smiling Face With Open Mouth And Smiling Eyes",
    meaning: "Smiley's mouth is wide open, its eyes squeezed shut with joy. Laughs loudly, cheerfully and heartily. Only the typical emoji eyes distinguish it from the classical smiley face. Can also be used for sarcasm."
  },
  {
    id: "7",
    emoji: "😆",
    name: " Smiling Face With Open Mouth And Closed Eyes",
    meaning: "Emoji is on the verge of a fit of laughter because something is so silly or incredibly funny. Also, mischievous or bitchy laughter about an event, or something that happened to another person.. Means the same as “XD“ and “X“ as a text-based emoticon."
  },
  {
    id:"8",
    emoji:"😅",
    name:"Smiling Face With Open Mouth & Cold Sweat",
    meaning:"Sweaty smile. Relief that a tight situation went well or was coped with positively, e.g. an important appointment. A difficult event is imminent and you are already nervous."
  },
  {
    id:"9",
    emoji:"😂",
    name:"Face With Tears of Joy",
    meaning:"I am laughing to hard that I can hardly keep myself on my chair! Something is so incredibly funny that you cry laughing. Gets the giggles and can hardly contain himself. This emoji is the most popular and was named Word of the Year 2015."
  },
  {
    id:"10",
    emoji:"🤣",
    name:"Rolling On The Floor, Laughing",
    meaning:"This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id:"11",
    emoji:"🥲",
    name:"Smiling face with tear",
    meaning:"Smile, even in difficult times. Instead of being really happy, you smile despite the pain. The real feelings are hidden behind a smile. Someone is going through difficult times or has a lot of problems."
  },
  {
    id:"12",
    emoji:"😊",
    name:"smiling face with smiling eyes",
    meaning:"Is grinning shyly and embarrassed. The red cheeks are an expression of joy. Represents happiness, contentment, peace of mind and gratitude. Text-based variant: ^^."


  },
  {
    id:"13",
    emoji:"😇",
    name:"Smiling Face With Halo",
    meaning:"Would like to express its (possibly pretended) innocence. Someone does good deeds, is very sweet, innocent and behaves in an exemplary way. The angelic face can also be used humorously for rather not so good deeds or behaviors."
  },
  {
    id:"14",
    emoji:"🙂",
    name:"Slightly Smiling Face",
    meaning:"A light smile means you are satisfied with yourself and the world. Can make a statement sound friendlier than it might have been meant. Or have a sarcastic meaning when a smile does not actually fit the content."
  },
  {
    id:"15",
    emoji:"🙃",
    name:"Upside-Down Face",
    meaning:"Don't take me seriously! The message is either ambiguous, ironic or joking. Person plays the fool and horses around, or in response to a joke."
  },
  {
    id:"16",
    emoji:"😉",
    name:"Winking Face",
    meaning:"Smiley blinks mischievously with one eye. Expression of humor, has been pulling a practical joke, is flirting with you or has an ulterior motive. The wink weakens the message: do not take it seriously, regard it as humorous."
  },
  {
    id:"17",
    emoji:"😌",
    name:"Relieved Face",
    meaning:"Everything went well! Relieved smiley face. Is happy that something unpleasant is over without having caused any harm. Relaxed, thankful and free of worries."
  },
  {
    id:"18",
    emoji:"😍",
    name:"Smiling Face With Heart-Eyes",
    meaning:"Happily beaming face with heart-shaped eyes. Insanely in love: with a person, a place or an object. Expresses the extent of love and affection as well as gratitude and is often part of romantic messages. Just does not know what to do with all the luck."
  },
  {
    id:"19",
    emoji:"🥰",
    name:"Smiling face with smiling eyes and three hearts",
    meaning:"You are in love, sitting on cloud number nine. The romantic emoji with the enamored expression of the face stands for affairs of the heart."
  },
  {
    id:"20",
    emoji:"😘",
    name:"Face Throwing a Kiss",
    meaning:"Smiley sends you a loving kiss that comes from the heart. Amicable, to express affection or with romantic intent, as an expression of love. May weaken a sarcastic response or be a reaction to a rude message. Symbol for flirting and showing gratitude."
  },
  {
    id:"21",
    emoji:"😗",
    name:"Kissing Face",
    meaning:"The face sends kisses to another person. The open eyes and the neutral face are not so much a sign of an intimate kiss but rather a kiss to a friend or relative. “Thank you“, “Hello“ or “Goodbye“. Could also stand for “whistling” or “duck face”."
  },
  {
    id:"22",
    emoji:"😙",
    name:"Kissing Face With Smiling Eyes",
    meaning:"Relaxed face expression, smiling eyes and kissing lips. A kiss to friends or “We hug and kiss you“ to relatives. Can also be used for whistling."
  },
  {
    id:"23",
    emoji:"😚",
    name:"Kissing Face With Closed Eyes",
    meaning:"Cute face with closed eyes and rosy cheeks. As a thank you for a tip or a favor. Loving kiss to the closest friends, family or darling."
  },
  {
    id:"24",
    emoji:"😋",
    name:"Face Savouring Delicious Food",
    meaning:"Bon appetit! Smiley is licking the corner of its mouth with its tongue. Is hungry, just cooked something very delicious or eaten a whole dish. Often interpreted as a grimace, with tongue outstretched, and used after a funny message or when fooling around."
  }

];

export default emojipedia;








