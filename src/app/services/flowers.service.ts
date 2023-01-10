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
        name: 'Rose',
        signification: 'A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over a hundred species and thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles. Flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds. Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa. Species, cultivars and hybrids are all widely grown for their beauty and often are fragrant. Roses have acquired cultural significance in many societies. Rose plants range in size from compact, miniature roses, to climbers that can reach seven meters in height. Different species hybridize easily, and this has been used in the development of the wide range of garden roses.',
        color: [FlowerColors.RED],
        images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rosa_rubiginosa_1.jpg/1200px-Rosa_rubiginosa_1.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rosa_rubiginosa_1.jpg/1200px-Rosa_rubiginosa_1.jpg'],
        saison: [FlowerSeasons.SUMMER]
      },
      {
        id: 2,
        name: 'Tulipe',
        signification: 'The tulip is a Eurasian and North African genus of perennial, bulbous plants in the lily family. It is a herbaceous perennial, growing to between 20 and 50 cm (8 and 20 in) tall, rarely to 70 cm (28 in), and bears a flower with a large, brightly coloured cup-shaped corolla. The tulip is a spring-blooming perennial plant, but cultivars exist with double flowers that bloom in late summer or early autumn. The tulip is a herbaceous perennial, growing to between 20 and 50 cm (8 and 20 in) tall, rarely to 70 cm (28 in), and bears a flower with a large, brightly coloured cup-shaped corolla. The tulip is a spring-blooming perennial plant, but cultivars exist with double flowers that bloom in late summer or early autumn.',
        color: [FlowerColors.RED, FlowerColors.YELLOW, FlowerColors.ORANGE, FlowerColors.PINK, FlowerColors.PURPLE],
        images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rosa_rubiginosa_1.jpg/1200px-Rosa_rubiginosa_1.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rosa_rubiginosa_1.jpg/1200px-Rosa_rubiginosa_1.jpg'],
        saison: [FlowerSeasons.SUMMER]
      },
      {
        id: 3,
        name: 'Pivoine',
        signification: 'The peony, or paeony, is a flowering plant in the genus Paeonia, the only genus in the family Paeoniaceae. It is native to Asia, Europe, and western North America, where it occurs in moist woods and on stream banks. The peony is a perennial plant, growing to 1–1.5 m (3.3–4.9 ft) tall, with large, showy flowers. The flowers are usually large, ranging from 5 to 30 cm (2.0 to 11.8 in) in diameter, and are usually double or semi-double. They are produced in early spring, before the leaves appear. The flowers are usually large, ranging from 5 to 30 cm (2.0 to 11.8 in) in diameter, and are usually double or semi-double. They are produced in early spring, before the leaves appear.',
        color: [FlowerColors.RED, FlowerColors.PINK, FlowerColors.PURPLE],
        images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rosa_rubiginosa_1.jpg/1200px-Rosa_rubiginosa_1.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rosa_rubiginosa_1.jpg/1200px-Rosa_rubiginosa_1.jpg'],
        saison: [FlowerSeasons.SUMMER]
      }
    ]
  }

  getFlowers(): Flower[] {
    return this.flowers;
  }

  getFlowerById(id: number): Flower {
    let flower: Flower = this.flowers.find(flower => flower.id === id)!;
    if(!flower) {
      throw new Error('Flower not found');
    }
    return flower;
  }
}
