import {Comment} from "./comments";
export interface Flower {
  id: number;
  name: string;
  color: FlowerColors[];
  signification: string;
  images: string[];
  saison: FlowerSeasons[];
  comments: Comment[];
  note: number;
  voteUtilisateur?: number;
  events: FlowerEvents[];
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

export enum FlowerEvents {
  MARRIAGE="Mariage",
  NAISSANCE="Naissance",
  AMOUR="Amour",
  DEUIL="Deuil",
  FELICITATION="Félicitation",
  ANNIVERSAIRE="Anniversaire",
  FETE_DES_MERES="Fête des mères",
  FAIRE_PLAISIR="Faire plaisir",
  REMERCIEMENTS="Remerciements",
}
