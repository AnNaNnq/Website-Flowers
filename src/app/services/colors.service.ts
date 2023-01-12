import {Injectable} from '@angular/core';
import {FlowerColors} from "../models/flowers";
import {Color} from "../models/colors.model";


@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  colors!: Color[];

  constructor() {
    this.colors = [
      {
        id: 1,
        name: FlowerColors.RED,
        emotion: "La passion",
        signification: 'Les fleurs rouges sont naturellement associées à l’amour, l’érotisme et la passion. C’est la couleur du pouvoir, du feu et du sang. Un bouquet rouge se prête donc à toutes les déclarations du sentiment amoureux, du coup de foudre à l’idylle passionnée : la couleur idéale pour offrir des fleurs à la Saint Valentin',
        color: "red",
      },
      {
        id: 2,
        name: FlowerColors.ORANGE,
        emotion: "La joie de vivre",
        signification: "Très tendance dans les années 60 et 70, la couleur orange est aujourd’hui revenue à la mode. C’est le ton de l’insouciance, de la joie de vivre, mais aussi du réconfort. Offrir un bouquet de fleurs orange, c’est transmettre un vœu sincère de partage et de bonheur.",
        color: "orange",
      },
      {
        id: 3,
        name: FlowerColors.YELLOW,
        emotion: "L’énergie",
        signification: "Si les fleurs jaunes sont les plus visibles dans la nature, c’est parce qu’elles sont à l’image de cet astre indispensable à la vie : le soleil. Offrir un bouquet de fleurs jaunes, c’est transmettre un message qui déborde d’optimisme et d’énergie pour l’avenir.",
        color: "gold",
      },
      {
        id: 4,
        name: FlowerColors.GREEN,
        emotion: "Le naturel",
        signification: "C’est la couleur la plus présente dans la nature et dans les compositions florales. Bio ou écolo, le vert est associé à l’abondance, l’espoir et la sincérité. Les bouquets où prédomine le vert sont « champêtres » et expriment les sentiments et les émotions en toute simplicité.",
        color: "green",
      },
      {
        id: 4,
        name: FlowerColors.BLUE,
        emotion: "La poésie",
        signification: "Les fleurs bleues ont les tiges sur terre et les pétales dans les nuages. C’est la couleur du rêve, de l’évasion, du voyage. Offrir un bouquet de fleurs bleues, c’est adresser un message personnel, une invitation très poétique à découvrir ensemble de nouveaux horizons.",
        color: "blue",
      },
      {
        id: 5,
        name: FlowerColors.PURPLE,
        emotion: "La gentillesse",
        signification: "Cette couleur représente la discrétion et la gentillesse mais aussi la profondeur des sentiments. Vous pouvez ainsi offrir une rose violette ou parme à une personne attachante et timide de votre entourage, pour lui déclarer vos sentiments tout en pudeur.",
        color: "#5725d5",
      },
      {
        id: 6,
        name: FlowerColors.PINK,
        emotion: "La tendresse",
        signification: "Les fleurs roses sont l’apparat de la jeunesse et de la séduction. C’est la couleur des petites filles, des contes de fées et des sucreries. Quelle que soit l’occasion, un bouquet rose vante les charmes de la féminité. Un message de tendresse offert tout en douceur.",
        color: "pink",
      },
      {
        id: 7,
        name: FlowerColors.WHITE,
        emotion: "La pureté",
        signification: "Les fleurs blanches sont traditionnellement associées au respect et à la pureté. C’est pourquoi elles s’offrent volontiers lors des cérémonies, pour des fiançailles ou un mariage. Un bouquet blanc adresse avec franchise un message de confiance et de fidélité.",
        color: "#a6a4a4",
      }
    ]
  }

  getAllColors(): Color[] {
    return this.colors;
  }
}
