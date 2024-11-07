export type Music = {
  title: React.ReactNode;
  audioSrc: string;
  imgSrc: string;
};

export const musicList: Music[] = [
  {
    title: "Arrival of the Birds",
    audioSrc: "/audio/arrival_of_the_birds.mp3",
    imgSrc: "/img/the_theory_of_everything.jfif",
  },
  {
    title: "Kungfu Panda Oogway Ascends",
    audioSrc: "/audio/oogway_ascends.mp3",
    imgSrc: "/img/oogway.webp",
  },
  {
    title: "Interstellar Cornfield Chase",
    audioSrc: "/audio/interstellar_theme.mp3",
    imgSrc: "/img/interstellar.webp",
  },
  {
    title: "Oppenheimer Can You Hear The Music",
    audioSrc: "/audio/oppenheimer_theme.mp3",
    imgSrc: "/img/oppenheimer.jpg",
  },
];
