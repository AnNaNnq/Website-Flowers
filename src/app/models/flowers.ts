import {Comment} from "./comments";
export interface Flower {
  id: number;
  name: string;
  color: FlowerColors[];
  signification: string;
  images: string[];
  saison: FlowerSeasons[];
  comments: Comment[];
}

export enum FlowerColors {
  RED = 'Rouge',
  BLUE = 'Bleu',
  GREEN = 'Vert',
  WHITE = 'Blanc',
  YELLOW = 'Jaune',
  ORANGE = 'Orange',
  PINK = 'Rose',
  PURPLE = 'Violet',
  BLACK = 'Noir',
  BROWN = 'Marron'
}

export enum FlowerSeasons {
  WINTER = 'Hiver',
  SPRING = 'Printemps',
  SUMMER = 'Été',
  AUTUMN = 'Automne'
}
