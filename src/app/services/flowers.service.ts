import {Injectable} from '@angular/core';
import {Flower, FlowerColors, FlowerSeasons} from "../models/flowers";

@Injectable({
  providedIn: 'root'
})
export class FlowersService {

  flowers!: Flower[];

  constructor() {
    this.flowers = [
      {
        id: 1,
        name: "L'Alstroméria",
        signification: "Associé au respect et à la gratitude, il est idéal à offrir. On aime également le retrouver dans un bouquet de mariée ou des compositions champêtres. L’alstroemeria symbolise l’amitié , ce qui le rend idéal à offrir pour célébrer une belle amitié. Chacun des six pétales représentent une caractéristique : compréhension, humour, patience, compassion, action et respect. À vous donc de choisir celle(s) que vous attribuez à l’amitié que vous célébrez.",
        color: [FlowerColors.YELLOW, FlowerColors.ORANGE],
        images: ["../../../assets/flowers/alstromeria/alstromeria.jpg", "../../../assets/flowers/alstromeria/alstromeria2.jpg", "../../../assets/flowers/alstromeria/alstromeria3.jpg"],
        saison: [FlowerSeasons.SUMMER]
      },
      {
        id: 2,
        name: "L'Amaryllis",
        signification: "La légende veut que l'amaryllis - cette étonnante fleur rouge que nous associons maintenant aux fêtes - fut initialement une nymphe timide et réservée. Amaryllis tomba follement amoureuse d'Alteo, un berger ayant la force d'Hercule et la beauté d'Apollon, mais qui ne l'aimait pas. Espérant qu'elle réussirait à gagner son amour en lui procurant la chose qu'il désirait le plus - une fleur si unique qu'elle n'avait jamais existé auparavant dans le monde - Amaryllis demanda conseil à l'oracle de Delphes. Suivant les instructions de l'oracle, Amaryllis se vêtit entièrement de blanc comme une jeune fille et apparut à la porte d'Alteo pendant 30 nuits, perçant à chaque fois son cœur d'une flèche d'or. Quand Alteo ouvrit enfin sa porte, il trouva devant lui une fleur d'un pourpre magnifique, jaillie du sang du cœur d'Amaryllis. Pourvue de ce mythe romantique - bien que tragique - il n'est pas étonnant que l'amaryllis symbolise aujourd'hui la fierté, la détermination et la beauté rayonnante.",
        color: [FlowerColors.RED],
        images: ["../../../assets/flowers/amaryllis/amaryllis.jpg", "../../../assets/flowers/amaryllis/amaryllis2.jpg", "../../../assets/flowers/amaryllis/amaryllis3.jpg"],
        saison: [FlowerSeasons.WINTER]
      },
      {
        id: 3,
        name: "L'Anémone",
        signification: "Le nom «anémone» vient du mot «fleur du vent» en grec. Selon la mythologie grecque, l'anémone naquit des larmes d'Aphrodite alors que celle-ci pleurait la mort d'Adonis. On pense qu'elle porte chance et qu'elle protège du mal, et la légende dit que quand l'anémone se ferme, c'est un signal qu'il va pleuvoir. De par son étymologie grecque, l’anémone signifie « ne m’abandonnez pas ». Elle reflète la persévérance, la confiance, l’amour intense et la tendre affection. Elle est idéale à offrir pour déclarer son amour !",
        color: [FlowerColors.PURPLE],
        images: ["../../../assets/flowers/anemone/anemone.jpg", "../../../assets/flowers/anemone/anemone2.jpg", "../../../assets/flowers/anemone/anemone3.jpg",],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.AUTUMN]
      },
      {
        id: 4,
        name: "",
        signification: "",
        color: [FlowerColors.RED],
        images: ["", ""],
        saison: [FlowerSeasons.SUMMER]
      },
      {
        id: 5,
        name: "",
        signification: "",
        color: [FlowerColors.RED],
        images: ["", ""],
        saison: [FlowerSeasons.SUMMER]
      },
      {
        id: 2,
        name: "",
        signification: "",
        color: [FlowerColors.RED],
        images: ["", ""],
        saison: [FlowerSeasons.SUMMER]
      },
      {
        id: 6,
        name: "",
        signification: "",
        color: [FlowerColors.RED],
        images: ["", ""],
        saison: [FlowerSeasons.SUMMER]
      },
      {
        id: 7,
        name: "",
        signification: "",
        color: [FlowerColors.RED],
        images: ["", ""],
        saison: [FlowerSeasons.SUMMER]
      },
      {
        id: 8,
        name: "",
        signification: "",
        color: [FlowerColors.RED],
        images: ["", ""],
        saison: [FlowerSeasons.SUMMER]
      },
      {
        id: 9,
        name: "",
        signification: "",
        color: [FlowerColors.RED],
        images: ["", ""],
        saison: [FlowerSeasons.SUMMER]
      },
      {
        id: 10,
        name: "",
        signification: "",
        color: [FlowerColors.RED],
        images: ["", ""],
        saison: [FlowerSeasons.SUMMER]
      },
    ]
  }

  getFlowers(): Flower[] {
    return this.flowers;
  }

  getFlowerById(id: number): Flower {
    let flower: Flower = this.flowers.find(flower => flower.id === id)!;
    if (!flower) {
      throw new Error('Flower not found');
    }
    return flower;
  }
}
