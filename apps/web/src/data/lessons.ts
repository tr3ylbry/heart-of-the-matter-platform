export type LessonIcon =
  | "piano"
  | "voice"
  | "guitar"
  | "bass"
  | "drums"
  | "songwriting"
  | "theory";

export type Lesson = {
  name: string;
  description: string;
  accent: "coral" | "cyan" | "gold" | "ink";
  icon: LessonIcon;
};

export type LessonDetail = Lesson & {
  bullets: string[];
};

export const lessons: Lesson[] = [
  {
    name: "Piano",
    description: "Build technique, musicianship, and confidence.",
    accent: "cyan",
    icon: "piano",
  },
  {
    name: "Voice",
    description: "Develop your tone, range, and authentic expression.",
    accent: "coral",
    icon: "voice",
  },
  {
    name: "Guitar",
    description: "From first chords to favorite songs, play your way.",
    accent: "gold",
    icon: "guitar",
  },
  {
    name: "Bass",
    description: "Lock in the groove and elevate every performance.",
    accent: "cyan",
    icon: "bass",
  },
  {
    name: "Drums",
    description: "Build rhythm, coordination, and creative freedom.",
    accent: "coral",
    icon: "drums",
  },
  {
    name: "Songwriting",
    description: "Turn your ideas into songs that matter.",
    accent: "gold",
    icon: "songwriting",
  },
];

export const lessonDetails: LessonDetail[] = [
  {
    name: "Piano",
    description:
      "Build technique, musical confidence, reading skills, rhythm, repertoire, and expressive playing.",
    accent: "cyan",
    icon: "piano",
    bullets: [
      "Reading music and understanding rhythm",
      "Healthy technique and hand coordination",
      "Repertoire that supports each student's goals",
      "Musical expression, dynamics, and confidence",
    ],
  },
  {
    name: "Voice",
    description:
      "Develop tone, breath support, pitch, range, confidence, and authentic expression.",
    accent: "coral",
    icon: "voice",
    bullets: [
      "Breath support and relaxed vocal production",
      "Pitch, tone, range, and ear training",
      "Performance confidence and stage presence",
      "Songs that feel meaningful and age-appropriate",
    ],
  },
  {
    name: "Guitar",
    description:
      "Learn chords, strumming, rhythm, songs, fretboard basics, and creative accompaniment.",
    accent: "gold",
    icon: "guitar",
    bullets: [
      "Chords, strumming patterns, and rhythm",
      "Favorite songs and creative accompaniment",
      "Fretboard basics and practical musicianship",
      "Playing with confidence and consistency",
    ],
  },
  {
    name: "Bass",
    description:
      "Build groove, timing, coordination, listening skills, and the foundation of ensemble playing.",
    accent: "cyan",
    icon: "bass",
    bullets: [
      "Groove, timing, and steady pulse",
      "Coordination and clean technique",
      "Listening skills for playing with others",
      "Bass lines that support the whole song",
    ],
  },
  {
    name: "Drums",
    description:
      "Develop rhythm, coordination, timing, musical independence, and creative freedom.",
    accent: "coral",
    icon: "drums",
    bullets: [
      "Rhythm, counting, and timekeeping",
      "Coordination and musical independence",
      "Creative fills, grooves, and patterns",
      "Playing with focus, control, and freedom",
    ],
  },
  {
    name: "Songwriting",
    description:
      "Turn ideas into songs through lyrics, melody, harmony, structure, and arrangement.",
    accent: "gold",
    icon: "songwriting",
    bullets: [
      "Lyrics, melody, and storytelling",
      "Song structure and arrangement",
      "Harmony, chords, and emotional shape",
      "Developing ideas from sketch to finished song",
    ],
  },
  {
    name: "Music Theory / Ear Training",
    description:
      "Strengthen the musical foundation behind the notes: rhythm, harmony, intervals, chord progressions, listening, and musicianship.",
    accent: "ink",
    icon: "theory",
    bullets: [
      "Rhythm, notation, and musical patterns",
      "Intervals, chords, and progressions",
      "Listening skills and pitch awareness",
      "Musicianship that supports every instrument",
    ],
  },
];
