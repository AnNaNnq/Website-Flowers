import {Injectable} from '@angular/core';
import {Flower, FlowerColors, FlowerEvents, FlowerSeasons} from "../models/flowers";

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
        images: [
          {
            src: "../../../assets/flowers/alstromeria/alstromeria.jpg",
          },
          {
            src: "../../../assets/flowers/alstromeria/alstromeria2.jpg",
          },
          {
            src: "../../../assets/flowers/alstromeria/alstromeria3.jpg",
          }
        ],
        saison: [FlowerSeasons.SUMMER],
        note: 0,
        events: [FlowerEvents.AMOUR, FlowerEvents.MARRIAGE],
        comments: [{
          id: 1,
          name: "Marie",
          comment: "J'adore cette fleur, elle est magnifique !",
          date: new Date("2022-06-01")
        },
          {
            id: 3,
            name: "Jean",
            comment: "Je suis d'accord avec toi, elle est vraiment belle !",
            date: new Date("2022-06-03")
          },
          {
            id: 4,
            name: "Anna",
            comment: "C'est une de mes fleurs préférées !",
            date: new Date("2022-08-24")
          },
          {
            id: 5,
            name: "Marc Petitdemange",
            comment: "Je ne suis pas d'accord avec vous, je trouve qu'elle est moche !",
            date: new Date("2022-08-28")
          }]
      },
      {
        id: 2,
        name: "L'Amaryllis",
        signification: "La légende veut que l'amaryllis - cette étonnante fleur rouge que nous associons maintenant aux fêtes - fut initialement une nymphe timide et réservée. Amaryllis tomba follement amoureuse d'Alteo, un berger ayant la force d'Hercule et la beauté d'Apollon, mais qui ne l'aimait pas. Espérant qu'elle réussirait à gagner son amour en lui procurant la chose qu'il désirait le plus - une fleur si unique qu'elle n'avait jamais existé auparavant dans le monde - Amaryllis demanda conseil à l'oracle de Delphes. Suivant les instructions de l'oracle, Amaryllis se vêtit entièrement de blanc comme une jeune fille et apparut à la porte d'Alteo pendant 30 nuits, perçant à chaque fois son cœur d'une flèche d'or. Quand Alteo ouvrit enfin sa porte, il trouva devant lui une fleur d'un pourpre magnifique, jaillie du sang du cœur d'Amaryllis. Pourvue de ce mythe romantique - bien que tragique - il n'est pas étonnant que l'amaryllis symbolise aujourd'hui la fierté, la détermination et la beauté rayonnante.",
        color: [FlowerColors.RED],
        images: [
          {
            src: "../../../assets/flowers/amaryllis/amaryllis.jpg",
          },
          {
            src: "../../../assets/flowers/amaryllis/amaryllis2.jpg",
          },
          {
            src: "../../../assets/flowers/amaryllis/amaryllis3.jpg",
          }
        ],
        saison: [FlowerSeasons.WINTER],
        note: 0,
        events: [FlowerEvents.ANNIVERSAIRE],
        comments: [
          {
            id: 1,
            name: "Meredith Grey",
            comment: "J'ai déjà fait des points de suture sur cette fleur, elle est vraiment belle !",
            date: new Date("2022-12-01")
          }
        ]
      },
      {
        id: 3,
        name: "L'Anémone",
        signification: "Le nom «anémone» vient du mot «fleur du vent» en grec. Selon la mythologie grecque, l'anémone naquit des larmes d'Aphrodite alors que celle-ci pleurait la mort d'Adonis. On pense qu'elle porte chance et qu'elle protège du mal, et la légende dit que quand l'anémone se ferme, c'est un signal qu'il va pleuvoir. De par son étymologie grecque, l’anémone signifie « ne m’abandonnez pas ». Elle reflète la persévérance, la confiance, l’amour intense et la tendre affection. Elle est idéale à offrir pour déclarer son amour !",
        color: [FlowerColors.PURPLE],
        images: [
          {
            src: "../../../assets/flowers/anemone/anemone.jpg",
          },
          {
            src: "../../../assets/flowers/anemone/anemone2.jpg",
          },
          {
            src: "../../../assets/flowers/anemone/anemone3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.AUTUMN],
        note: 0,
        events: [FlowerEvents.FAIRE_PLAISIR, FlowerEvents.DEUIL],
        comments: [
          {
            id: 1,
            name: "R2D2",
            comment: "Bip Boop Bop !",
            date: new Date("2022-04-08")
          },
          {
            id: 2,
            name: "C3PO",
            comment: "Je suis d'accord avec toi, elle est vraiment belle !",
            date: new Date("2022-04-08")
          }
        ]
      },
      {
        id: 4,
        name: "L'Anthurium",
        signification: "Avec leurs fleurs ouvertes en forme de cœur et leur disposition tropicale, il n'est pas étonnant que les anthuriums symbolisent l'hospitalité. Également appelée «flamant rose» et «langue de feu», - à cause de sa forme et de sa couleur particulières - le nom «anthurium» vient du grec et veut dire «grande fleur». Exotique et attirant, avec ses fleurs rouges audacieuses et brillantes, et son feuillage vert foncé, l'anthurium est irrésistiblement beau et dure très longtemps, tout comme l'hospitalité qu'il représente. On pense qu'elle porte chance et qu'elle protège du mal, et la légende dit que quand l'anémone se ferme, c'est un signal qu'il va pleuvoir. D'autres mythes encore lient l'anémone aux fées, dont on raconte qu'elles dormaient sous ses pétales fermés après le coucher du soleil. C'est peut-être à cause de ces contes magiques et prophétiques que les anémones représentent aujourd'hui l'anticipation dans le langage des fleurs.",
        color: [FlowerColors.RED],
        images: [
          {
            src: "../../../assets/flowers/anthurium/anthurium.jpg",
          },
          {
            src: "../../../assets/flowers/anthurium/anthurium2.jpg",
          },
          {
            src: "../../../assets/flowers/anthurium/anthurium3.jpg",
          }
        ],
        saison: [FlowerSeasons.AUTUMN],
        note: 0,
        events: [FlowerEvents.AMOUR],
        comments: [{
          id: 1,
          name: "Tyler Durden",
          comment: "La premère règle du Fight Club est : vous ne parlez pas de L'Anthurium.",
          date: new Date("2022-08-08")
        }]
      },
      {
        id: 5,
        name: "L'Aster",
        signification: "Avec sa beauté de fleur sauvage et sa texture luxuriante, l'aster a été considéré pendant longtemps comme une fleur enchantée. Dans l'antiquité, on pensait que l'odeur des feuilles d'aster brûlées éloignait les serpents. Aujourd'hui, on le considère comme un talisman de l'amour et un symbole de la patience. Aussi connu sous le nom de « stellaire » ou de « marguerite de la Saint-Michel », le nom de l'aster vient du mot grec signifiant « étoile » et dans le langage des fleurs, l’aster est symbole d’amour éternel, de fidélité et de réconfort en fin de vie. Fleur de ceux qui sont nés en septembre, l'aster a également l'honneur d'être la fleur du vingtième anniversaire de mariage.",
        color: [FlowerColors.PURPLE],
        images: [
          {
            src: "../../../assets/flowers/aster/aster.jpg",
          },
          {
            src: "../../../assets/flowers/aster/aster2.jpg",
          },
          {
            src: "../../../assets/flowers/aster/aster3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.SUMMER],
        note: 0,
        events: [FlowerEvents.ANNIVERSAIRE, FlowerEvents.FAIRE_PLAISIR],
        comments: [{
          id: 1,
          name: "Rambo",
          comment: "Quand je vais dans la jungle, je vais toujours avec des fleurs d'aster, elles me protègent des serpents !",
          date: new Date("1988-07-14")
        }]
      },
      {
        id: 6,
        name: "L'Oiseau de Paradis",
        signification: "Ressemblant incontestablement à un oiseau de couleurs vives en vol, l'oiseau de paradis est originaire d'Afrique du Sud et représente la joie et (on s'en doutait) le paradis lui-même. Également connue sous le nom de «strelitzia», cette fleur se distingue par sa forme spectaculaire de bec et de plumage d'oiseau. L'oiseau du paradis est la fleur du neuvième anniversaire de mariage.",
        color: [FlowerColors.ORANGE, FlowerColors.BLUE],
        images: [
          {
            src: "../../../assets/flowers/oiseau_paradis/oiseau_paradis.jpg",
          },
          {
            src: "../../../assets/flowers/oiseau_paradis/oiseau_paradis2.jpg",
          },
          {
            src: "../../../assets/flowers/oiseau_paradis/oiseau_paradis3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.AUTUMN, FlowerSeasons.WINTER],
        note: 0,
        events: [FlowerEvents.FAIRE_PLAISIR],
        comments: [{
          id: 1,
          name: "Marc Petitdemange",
          comment: "C'est l'une des plus belles fleurs que je n'ai jamais vu !",
          date: new Date("2022-04-08")
        }]
      },
      {
        id: 7,
        name: "La Bouvardia",
        signification: "Nommées d'après Charles Bouvard, médecin personnel de Louis XIII et surintendant du Jardin Royal à Paris, les variétés modernes de bouvardia ont des noms tels que Pink Luck, Albatross et Royal Katty. Leurs fleurs en forme d'étoile poussent en grappes sur des tiges minces ramifiées, tels de petits bouquets, dans des tons doux de rose, blanc, jaune, saumon et rouge. Avec son parfum délicat et son aspect féminin, dans le langage des fleurs la bouvardia représente l'enthousiasme.",
        color: [FlowerColors.RED, FlowerColors.WHITE, FlowerColors.PINK],
        images: [
          {
            src: "../../../assets/flowers/bouvardia/bouvardia.jpg",
          },
          {
            src: "../../../assets/flowers/bouvardia/bouvardia2.jpg",
          },
          {
            src: "../../../assets/flowers/bouvardia/bouvardia3.jpg",
          }
        ],
        saison: [FlowerSeasons.SUMMER, FlowerSeasons.AUTUMN],
        note: 0,
        events: [FlowerEvents.NAISSANCE, FlowerEvents.ANNIVERSAIRE, FlowerEvents.FELICITATION, FlowerEvents.MARRIAGE],
        comments: [
          {
            id: 1,
            name: "Louis XIV",
            comment: "Dans mon royaume, je veux que l'on en plante partout !",
            date: new Date("1700-11-06")
          }
        ]
      },
      {
        id: 8,
        name: "L'Oeillet",
        signification: "Avec une histoire qui remonte à plus de 2 000 ans, il n'est pas surprenant que les œillets soient riches en symboles, en mythologie et même en débats. Tandis que quelques disciples proposent que leur nom vienne du mot «corone» (des guirlandes de fleur) ou «couronnement» en raison de son utilisation dans des couronnes cérémonieuses grecques, d'autres proposent qu'elle ait dérivé des «carnis» latins (chair) se rapportant à la couleur rosâtre-hued originale ou au «incarnacyon» de la fleur (incarnation), se rapportant à l'incarnation de la chair Dieu-faite. Aujourd'hui, on peut trouver les œillets dans un large éventail de couleurs, et bien qu'ils expriment en général l'amour, la fascination et la distinction, pratiquement chaque couleur représente une association unique et riche. Les oeillets blancs suggèrent l'amour pur et la chance, les rouges pâles symbolisent l'admiration, tandis que les rouges foncés représentent l'amour profond et l'affection. Les oeillets violets signifient le caprice et les œillets roses sont chargés de la signification la plus riche, à commencer par la croyance qu'ils sont apparus la première fois sur terre sous forme de larmes de la Vierge Marie, ce qui en a fait le symbole de l'éternité de l'amour maternel.",
        color: [FlowerColors.PINK, FlowerColors.WHITE],
        images: [
          {
            src: "../../../assets/flowers/oeillet/oeillet.jpg",
          },
          {
            src: "../../../assets/flowers/oeillet/oeillet2.jpg",
          },
          {
            src: "../../../assets/flowers/oeillet/oeillet3.jpg",
          }
        ],
        saison: [FlowerSeasons.SUMMER],
        note: 0,
        events: [FlowerEvents.FETE_DES_MERES, FlowerEvents.AMOUR, FlowerEvents.FAIRE_PLAISIR, FlowerEvents.DEUIL],
        comments: [{
          id: 1,
          name: "Donald Trump",
          comment: "Oh my god, I will send this flower to Kim Jong Un !",
          date: new Date("2021-01-08")
        }]
      },
      {
        id: 9,
        name: "Le Chrysanthème",
        signification: "En France, le chrysanthème est la fleur symbole de deuil par excellence. Aux côtés des roses, lys et autres œillets, il trouve une place de choix dans les compositions florales lors des funérailles.  Le mot chrysanthème (« chrysanthemum » pour les botanistes) puise ses racines dans l'étymologie grecque : « chrysos » signifie « or » et « anthemon » se traduit par « fleur ». Ainsi, dans les cultures asiatiques, la fleur d'or (ou « floraison d'or ») revêt une symbolique éminemment joyeuse : elle exprime l'optimisme, la gaîté, le bonheur. Au pays du soleil levant, les chrysanthèmes sont symboles d'éternité.",
        color: [FlowerColors.RED, FlowerColors.ORANGE, FlowerColors.PINK, FlowerColors.YELLOW],
        images: [
          {
            src: "../../../assets/flowers/chrysantheme/chrysantheme.jpg",
          },
          {
            src: "../../../assets/flowers/chrysantheme/chrysantheme2.jpg",
          },
          {
            src: "../../../assets/flowers/chrysantheme/chrysantheme3.jpg",
          }
        ],
        saison: [FlowerSeasons.SUMMER, FlowerSeasons.AUTUMN],
        note: 0,
        events: [FlowerEvents.DEUIL],
        comments: [
          {
            id: 1,
            name: "Tony Stark",
            comment: "J'ai souvent vu des chrysanthèmes dans les films, mais je ne savais pas qu'ils avaient une signification aussi importante !",
            date: new Date("2021-06-08")
          }
        ]
      },
      {
        id: 10,
        name: "La Jonquille",
        signification: "La jonquille est un symbole contre le cancer dans d’autre pays. Partout dans le monde, cette fleur universellement élégante est un porte-étendard et elle est synonyme de l’arrivée des beaux jours du printemps avec ses longues tiges et ses belles fleurs jaunes, à peine l’hiver décline-t-il, elle est une des toutes premières à fleurir. Dans le langage des fleurs, la jonquille est porteuse de message d’amour sincère et de désir impatient, elle manifeste une attente galante profonde et qui aimerait être assouvie, mais de façon subtile et voilée, en toute discrétion. Cependant, elle peut aussi être porteuse d’une sorte d’ultimatum qui indique que la personne qui déclare son amour est en attente d’une réponse rapidement ! Soit un amour transi depuis longtemps ou une déclaration soudaine qui nécessite un retour sans attente. La jonquille est donc symbole d’un amour brûlant qui ne demande qu’à vivre sa passion et son désir ! De façon plus générale, la jonquille ou narcisse est un signe de prospérité et de richesse souhaitée à soi-même ou un proche. Elle peut aussi être prise à contre courant et être une représentation de l'égoïsme de la personne qui la reçoit, une sorte de cadeau à double tranchant !",
        color: [FlowerColors.YELLOW],
        images: [
          {
            src: "../../../assets/flowers/jonquille/jonquille.jpg",
          },
          {
            src: "../../../assets/flowers/jonquille/jonquille2.jpg",
          },
          {
            src: "../../../assets/flowers/jonquille/jonquille3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.SUMMER],
        note: 0,
        events: [FlowerEvents.FETE_DES_MERES, FlowerEvents.MARRIAGE, FlowerEvents.NAISSANCE, FlowerEvents.FAIRE_PLAISIR],
        comments: [
          {
            id: 1,
            name: "Jean Claude Van Damme",
            comment: "J'aime cette fleur, elle adore l'eau, dans 20 ou 30 ans, y en aura plus !",
            date: new Date("2021-06-08")
          }
        ]
      },
      {
        id: 11,
        name: "La Delphinium",
        signification: "Dérivé du mot grec «delphis» qui signifie «dauphin», la dauphinelle est aussi souvent appelée larkspur. On les appelle aussi «pieds-d'alouette». Utilisé par les Amérindiens et les colons européens pour faire du colorant bleu, on croit que l'utilisation la plus ancienne des fleurs de delphinium servait à chasser les scorpions. Fleur de ceux qui sont nés en juillet, ces fleurs luxuriantes en forme de dauphin symbolisent un cœur ouvert et un attachement ardent, et transmettent un sentiment de légèreté et de grâce.",
        color: [FlowerColors.BLUE, FlowerColors.PURPLE, FlowerColors.PINK],
        images: [
          {
            src: "../../../assets/flowers/delphinium/delphinium.jpg",
          },
          {
            src: "../../../assets/flowers/delphinium/delphinium2.jpg",
          },
          {
            src: "../../../assets/flowers/delphinium/delphinium3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.AUTUMN],
        note: 0,
        events: [FlowerEvents.AMOUR],
        comments: [
          {
            id: 1,
            name: "Mickael de Paris",
            comment: "J'adore les delphinium, ils sont tellement beaux !",
            date: new Date("2021-12-25")
          },
          {
            id: 2,
            name: "Kim Jong Un",
            comment: "Dans mon pays, vous êtes condamné à mort pour avoir écrit un commentaire aussi stupide !",
            date: new Date("2021-12-26")
          }
        ]
      },
      {
        id: 12,
        name: "Le Freesia",
        signification: "Nommé d'après le médecin allemand Friedrich Heinrich Theodor Freese, le freesia - avec ses fleurs en forme de cloche au doux parfum d'agrumes - est une des fleurs parfumées les plus populaires. Et, tandis que dans la plupart des cas, la variation blanche d'une fleur est la plus parfumée, dans le cas du freesia, les variétés roses et rouges sont les plus parfumées. Avec leurs tiges filiformes et leurs fleurs délicates, il n'est pas surprenant que l'une des variétés les plus populaires de freesias soit appelée «ballerine». Fleur du septième anniversaire de mariage, dans le langage des fleurs, on dit que le freesia symbolise l'innocence et l'amitié.",
        color: [FlowerColors.YELLOW, FlowerColors.WHITE, FlowerColors.PURPLE, FlowerColors.RED, FlowerColors.PINK],
        images: [
          {
            src: "../../../assets/flowers/freesia/freesia.jpg",
          },
          {
            src: "../../../assets/flowers/freesia/freesia2.jpg",
          },
          {
            src: "../../../assets/flowers/freesia/freesia3.jpg",
          }
        ],
        saison: [FlowerSeasons.WINTER],
        note: 0,
        events: [FlowerEvents.REMERCIEMENTS],
        comments: [
          {
            id: 1,
            name: "Michael Jackson",
            comment: "Oh my god, that's a freesia!",
            date: new Date("2010-12-09")
          }
        ]
      },
      {
        id: 13,
        name: "Le Glaïeul",
        signification: "Nommé pour la forme de ses feuilles, le glaïeul - du mot latin «gladius», qui signifie «épée» - a une histoire qui s'étend de l'Afrique à la Méditerranée. Symbolisant l'intégrité et la force morale, les glaïeuls représentent également l'engouement, et quand quelqu'un envoie un bouquet de cette fleur, cela indique que son cœur bat intensément pour elle. Avec ses tiges hautes et ses couleurs vives et frappantes, cette fleur de ceux qui sont nés au mois d'août et du quarantième anniversaire de mariage évoque le drame des gladiateurs romains.",
        color: [FlowerColors.YELLOW, FlowerColors.WHITE, FlowerColors.PURPLE, FlowerColors.RED, FlowerColors.PINK],
        images: [
          {
            src: "../../../assets/flowers/glaieul/glaieul.jpg",
          },
          {
            src: "../../../assets/flowers/glaieul/glaieul2.jpg",
          },
          {
            src: "../../../assets/flowers/glaieul/glaieul3.jpg",
          }
        ],
        saison: [FlowerSeasons.AUTUMN, FlowerSeasons.SUMMER],
        note: 0,
        events: [FlowerEvents.AMOUR],
        comments: [
          {
            id: 1,
            name: "Brigitte Macron",
            comment: "J'adore les glaïeuls, ils sont magnifiques et ils sentent bon! J'en ai plein à l'Elysée!",
            date: new Date("2022-04-04")
          },
          {
            id: 2,
            name: "Emmanuel Macron",
            comment: "Mais dis donc Brigitte, tu ne vas pas nous faire croire que tu aimes les glaïeuls, c'est une fleur de pauvre!",
            date: new Date("2022-04-05")
          },
          {
            id: 3,
            name: "Brigitte Macron",
            comment: "Mais non, je t'assure que j'aime les glaïeuls, ils sont magnifiques!",
            date: new Date("2022-04-06")
          }
        ]
      },
      {
        id: 14,
        name: "La Bruyère",
        signification: "Le nom scientifique de la bruyère, «Calluna vulgaris», vient du grec «kallune», qui signifie «nettoyer» ou «brosser» et du latin «vulgaris», qui signifie «commun», car les rameaux de bruyère étaient autrefois utilisés pour fabriquer les balais. Originaire de l'Irlande, de l'Écosse, de la Scandinavie, de la Russie et de l'Amérique du Nord, on dit aussi que les branches de bruyère étaient anciennement utilisées pour fabriquer des paniers, des cordes, de la literie, comme chaume pour les toits et même pour aromatiser la bière ou le thé. Aujourd'hui, c'est la beauté des fleurs de bruyère - avec leurs couleurs allant du blanc au rose, et du violet au rouge - qui attire notre attention. Symbolisant l'admiration et la chance, on dit aussi que la bruyère a des pouvoirs protecteurs.",
        color: [FlowerColors.PINK],
        images: [
          {
            src: "../../../assets/flowers/bruyere/bruyere.jpg",
          },
          {
            src: "../../../assets/flowers/bruyere/bruyere2.jpg",
          },
          {
            src: "../../../assets/flowers/bruyere/bruyere3.jpg",
          }
        ],
        saison: [FlowerSeasons.WINTER, FlowerSeasons.SUMMER],
        note: 0,
        events: [FlowerEvents.AMOUR, FlowerEvents.FETE_DES_MERES],
        comments: [
          {
            id: 1,
            name: "Jeanne d'Arc",
            comment: "J'adore les bruyères, elles sont magnifiques et elles sentent bon! J'en ai plein à Rouen!",
            date: new Date("1429-05-30")
          },
          {
            id: 2,
            name: "Charles VII",
            comment: "Sorcière va! Tu vas te faire brûler!",
            date: new Date("1429-05-31")
          },
          {
            id: 3,
            name: "Jeanne d'Arc",
            comment: "Mais pourquoi? Je n'ai rien fait de mal!",
            date: new Date("1429-06-01")
          },
          {
            id: 4,
            name: "Charles VII",
            comment: "Tu as dit que les bruyères étaient magnifiques et qu'elles sentaient bon! C'est une fleur de sorcière!",
            date: new Date("1429-06-02")
          },
        ]
      },
      {
        id: 15,
        name: "La Jacinthe",
        signification: "La légende veut que l'origine de la jacinthe, cette fleur très parfumée en forme de cloche, remonte à un jeune garçon grec du nom de Hyakinthos. L'histoire raconte que deux déités - Apollon, le dieu du soleil et Zéphyr le dieu du vent d'ouest - adoraient Hyakinthos et tentaient toutes deux d'attirer son attention. Un jour, tandis qu'Apollon enseignait à Hyakinthos l'art du lancer du disque, Zéphyr, fou de jalousie, souffla pour renvoyer le disque dans leur direction et tua Hyakinthos en le touchant à la tête. Apollon donna le nom de Hyakinthos à la fleur qui poussa de son sang. Symbolisant le sport ou le jeu dans le langage des fleurs, la jacinthe représente la constance, tandis que la jacinthe bleue exprime la sincérité.",
        color: [FlowerColors.YELLOW, FlowerColors.WHITE, FlowerColors.PURPLE, FlowerColors.RED, FlowerColors.PINK],
        images: [
          {
            src: "../../../assets/flowers/jacinthe/jacinthe.jpg",
          },
          {
            src: "../../../assets/flowers/jacinthe/jacinthe2.jpg",
          },
          {
            src: "../../../assets/flowers/jacinthe/jacinthe3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING],
        note: 0,
        events: [FlowerEvents.REMERCIEMENTS, FlowerEvents.AMOUR],
        comments: [
          {
            id: 1,
            name: "Angela Merkel",
            comment: "Ich liebe die Hyazinthe, die sind mein Lieblingsblume!",
            date: new Date("2021-03-30")
          }
        ]
      },
      {
        id: 16,
        name: "L'Hydrangeas",
        signification: "Découverte tout d'abord au Japon, le nom de l'hydrangée vient du grec «hydor», qui signifie «eau» et «angos» qui signifie «pot» ou «récipient». La traduction est plus ou moins «récipient d'eau», car l'hydrangée a besoin de beaucoup d'eau et a une fleur en forme de coupelle. Avec ses tiges en bois et ses fleurs en forme d'étoile ressemblant à de la dentelle et serrées les unes contre les autres en un pompon, l'hydrangée a une gamme de couleurs allant du blanc au bleu, au rose et au violet, en fonction du niveau d'acidité du sol. Là reste une certaine discussion au-dessus du symbolisme des hydrangea - avec certains qui le relient à la vanité et la vantardise (peut-être reflétant son abondance de pétales et forme somptueuse et arrondie) et d'autres qui suggèrent qu'un bouquet des hydrangeas exprime le gratefulness du donateur pour l'arrangement du destinataire. D'autres encore suggèrent qu'elle représente tout ce qui est ressenti sincèrement au fond du cœur. Malgré ces dissensions quant à la signification de cette fleur, tout le monde est d'accord sur le fait qu'il s'agit de la fleur du quatrième anniversaire de mariage et qu'elle possède une grâce et une beauté durable.",
        color: [FlowerColors.BLUE, FlowerColors.PINK],
        images: [
          {
            src: "../../../assets/flowers/hydrangeas/hydrangeas.jpg",
          },
          {
            src: "../../../assets/flowers/hydrangeas/hydrangeas2.jpg",
          },
          {
            src: "../../../assets/flowers/hydrangeas/hydrangeas3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.SUMMER],
        note: 0,
        events: [FlowerEvents.FETE_DES_MERES, FlowerEvents.AMOUR, FlowerEvents.FAIRE_PLAISIR],
        comments: [
          {
            id: 1,
            name: "Mme de Sévigné",
            comment: "A Paris, les hydrangées sont très populaires. Je dirai même qu'elles sont plus populaires que les roses!",
            date: new Date("1675-05-30")
          }
        ]
      },
      {
        id: 17,
        name: "L’Iris",
        signification: "La mythologie de l'iris remonte à la Grèce antique, où la déesse Iris, qui personnifiait l'arc-en-ciel (le mot grec pour l'iris), servait de lien entre le ciel et la terre. On dit que les iris violets étaient plantés sur les tombes des femmes pour convoquer la déesse Iris afin qu'elle les guide dans leur voyage vers le ciel. Les iris ont été liés à la monarchie française pendant le Moyen Âge, avant d'être finalement reconnus comme symbole national, la fleur de lys. Fleur de ceux qui sont nés en février et du vingt-cinquième anniversaire de mariage, ainsi que symbole de l'état du Tennessee, on dit que les trois pétales de l'iris symbolisent la foi, le courage et la sagesse.",
        color: [FlowerColors.BLUE, FlowerColors.PINK, FlowerColors.PURPLE],
        images: [
          {
            src: "../../../assets/flowers/iris/iris.jpg",
          },
          {
            src: "../../../assets/flowers/iris/iris2.jpg",
          },
          {
            src: "../../../assets/flowers/iris/iris3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.SUMMER],
        note: 0,
        events: [FlowerEvents.AMOUR, FlowerEvents.MARRIAGE, FlowerEvents.FAIRE_PLAISIR],
        comments: [
          {
            id: 1,
            name: "Iris Mittenaere",
            comment: "Quel plaisir d'avoir une aussi belle fleur qui porte mon nom! Je suis très fière de l'iris!",
            date: new Date("2016-05-30")
          }
        ]
      },
      {
        id: 18,
        name: "Le Lilas",
        signification: "Selon la mythologie grecque, l'histoire des lilas commence avec une belle nymphe du nom de Syringa (le nom botanique du lilas). Pan, le dieu des forêts et des champs, subjugué par la beauté de Syringa, la pourchassa à travers la forêt. Effrayée par l'affection de Pan, Syringa lui échappa en se transformant en un buisson aromatique; la fleur que nous appelons aujourd'hui lilas. Fleur du huitième anniversaire de mariage et symbole de l'état du New Hampshire (symbolisant le caractère résistant des citoyens de cet état), le lilas est souvent considéré comme un présage de printemps, car le moment de sa floraison signale si le printemps sera précoce ou tardif. Dans le langage des fleurs, le lilas mauve symbolise les premières émotions de l'amour, alors que le lilas blanc représente l'innocence juvénile.",
        color: [FlowerColors.BLUE, FlowerColors.PINK, FlowerColors.PURPLE],
        images: [
          {
            src: "../../../assets/flowers/lila/lila.jpg",
          },
          {
            src: "../../../assets/flowers/lila/lila2.jpg",
          },
          {
            src: "../../../assets/flowers/lila/lila3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING],
        note: 0,
        events: [FlowerEvents.AMOUR],
        comments: [
          {
            id: 1,
            name: "Charles Baudelaire",
            comment: "Je ne connais pas de fleur plus belle que le lilas. Son parfum est aussi doux que la musique de Debussy.",
            date: new Date("1863-05-30")
          },
          {
            id: 2,
            name: "Victor Hugo",
            comment: "Le lilas est une fleur qui me rappelle mon enfance. Je l'adore!",
            date: new Date("1869-05-30")
          }
        ]
      },
      {
        id: 19,
        name: "Le Lys",
        signification: "Tandis que les lis blancs symbolisent la chasteté et la vertu - et étaient le symbole de la pureté de Mary de Vierge et son rôle de la reine des anges - pendant que d'autres variétés devenaient populaires, elles ont apporté avec eux des significations et le symbolisme additionnels aussi bien. Les lys péruviens, ou alstroemeria, représentent l'amitié et le dévouement, alors que les lys Stargazer blancs expriment la sympathie et les lys Stargazer roses représentent la richesse et la prospérité. Symbolisant l'humilité et la dévotion, les lis sont l'anniversaire flower de 30th - tandis que les lis de la vallée sont la 22eme fleur d'anniversaire de mariage. En tant que fleur le plus souvent associée aux funérailles, le lys symbolise le retour à la pureté de l'âme du défunt après la mort.",
        color: [FlowerColors.WHITE, FlowerColors.PINK, FlowerColors.YELLOW],
        images: [
          {
            src: "../../../assets/flowers/lys/lys.jpg",
          },
          {
            src: "../../../assets/flowers/lys/lys2.jpg",
          },
          {
            src: "../../../assets/flowers/lys/lys3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.SUMMER, FlowerSeasons.AUTUMN],
        note: 0,
        events: [FlowerEvents.DEUIL, FlowerEvents.AMOUR, FlowerEvents.NAISSANCE, FlowerEvents.MARRIAGE],
        comments: [
          {
            id: 1,
            name: "Arthur Rimbaud",
            comment: "C'est pour moi la fleur qui représente mon amour pour la poésie. Je l'adore!",
            date: new Date("1863-05-03")
          },
          {
            id: 2,
            name: "Paul Verlaine",
            comment: "Arrêtez diantre de m'envoyer des lys! Je ne suis pas un poète romantique!",
            date: new Date("1863-05-03")
          },
          {
            id: 3,
            name: "Arthur Rimbaud",
            comment: "Je t'envoie des lys pour te dire que je t'aime!",
            date: new Date("1863-05-04")
          }
        ]
      },
      {
        id: 20,
        name: "Le Lisianthus",
        signification: "Avec une foule de noms - de Eustoma grandiflorum à Eustoma russellianum ou rose japonaise - le lisianthus symbolise une nature extravertie. Originaire du Texas et du Mexique, et issu d'une fleur sauvage d'Amérique du Nord, dans sa forme simple, le lisianthus peut ressembler à des tulipes ou à des coquelicots. Dans sa forme double, il peut prendre l'apparence de roses ou de pivoines. Avec ses larges pétales volants très délicats et ses feuilles ovales, dans des couleurs allant du blanc au rose, du mauve au violet et à des bleus-violet, on dit que le lisianthus symbolise aussi l'appréciation.",
        color: [FlowerColors.BLUE, FlowerColors.PINK],
        images: [
          {
            src: "../../../assets/flowers/lisianthus/lisianthus.jpg",
          },
          {
            src: "../../../assets/flowers/lisianthus/lisianthus2.jpg",
          },
          {
            src: "../../../assets/flowers/lisianthus/lisianthus3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.SUMMER],
        note: 0,
        events: [FlowerEvents.AMOUR, FlowerEvents.FAIRE_PLAISIR, FlowerEvents.MARRIAGE, FlowerEvents.ANNIVERSAIRE, FlowerEvents.REMERCIEMENTS, FlowerEvents.FELICITATION],
        comments: [
          {
            id: 1,
            name: "Jean de La Fontaine",
            comment: "Cette plante est une des plus grandes sources de poison. Elle est aussi très toxique pour les animaux.",
            date: new Date("1668-05-30")
          },
          {
            id: 2,
            name: "Jean Marie Leclerc de Buffon",
            comment: "Mais qu'est ce que tu racontes Jean, c'est n'importe quoi!",
            date: new Date("1749-05-30")
          }
        ]
      },
      {
        id: 21,
        name: "L'Orchidée",
        signification: "La plus convoitée des plantes ornementales, l'orchidée délicate, exotique et gracieuse représente l'amour, le luxe, la beauté et la force. Dans la Grèce antique, les orchidées étaient associées à la virilité. En fait, les femmes grecques croyaient que si le père de leur enfant à naître mangeait de grands et nouveaux tubercules d’orchidées, le bébé serait un garçon. Si la mère mangeait les petits tubercules d'orchidée, elle donnerait naissance à une fille. Pendant l'ère victorienne, le symbolisme d'orchidées s'est déplacé vers le luxe, et aujourd'hui, ce sens de la magnificence et de la splendeur artistique se poursuit, avec les orchidées représentant la beauté rare et délicate. La fleur du 14e anniversaire de mariage, l'orchidée rose traduit l'affection pure, et la populaire orchidée cattleya représente le charme mûr.",
        color: [FlowerColors.BLUE, FlowerColors.PINK, FlowerColors.YELLOW, FlowerColors.WHITE],
        images: [
          {
            src: "../../../assets/flowers/orchidee/orchidee.jpg",
          },
          {
            src: "../../../assets/flowers/orchidee/orchidee2.jpg",
          },
          {
            src: "../../../assets/flowers/orchidee/orchidee3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.AUTUMN],
        note: 0,
        events: [FlowerEvents.AMOUR, FlowerEvents.MARRIAGE],
        comments: [
          {
            id: 1,
            name: "Marie Curie",
            comment: "J'adore les orchidées, j'en ai pleins le labo, malheureusement elles meurent toutes des radiations.",
            date: new Date("1903-05-30")
          },
          {
            id: 2,
            name: "Pierre Curie",
            comment: "C'est pas vrai Marie, tu les arroses pas assez!",
            date: new Date("1903-05-30")
          }
        ]
      },
      {
        id: 22,
        name: "La Pivoine",
        signification: "Avec une histoire qui remonte à des milliers d'années, il n'est pas étonnant que même la mythologie contienne plusieurs versions sur l'origine de la pivoine. La légende veut que la pivoine soit nommée d'après Péon, médecin des dieux, qui reçut de la mère d'Apollon la fleur sur le mont Olympe. Une autre légende raconte l'histoire de ce même médecin qui fut «sauvé» de la mort réservée aux autres mortels en étant transformé en fleur de pivoine. Symbole floral traditionnel de la Chine, fleur de l'état de l'Indiana et fleur du 12e anniversaire de mariage, la pivoine est connue comme la fleur de la richesse et de l'honneur. Avec leur apparence luxuriante, pleine et ronde, les pivoines incarnent le romantisme et la prospérité et sont considérées comme un présage de bonne fortune et de mariage heureux.",
        color: [FlowerColors.RED, FlowerColors.PINK, FlowerColors.YELLOW],
        images: [
          {
            src: "../../../assets/flowers/pivoine/pivoine.jpg",
          },
          {
            src: "../../../assets/flowers/pivoine/pivoine2.jpg",
          },
          {
            src: "../../../assets/flowers/pivoine/pivoine3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.SUMMER],
        note: 0,
        events: [FlowerEvents.AMOUR, FlowerEvents.ANNIVERSAIRE, FlowerEvents.FAIRE_PLAISIR],
        comments: [{
          id: 1,
          name: "Albert Einstein",
          comment: "Ah la pivoine, j'en ai mangé une fois, c'était délicieux!",
          date: new Date("1905-05-30")
        },
          {
            id: 2,
            name: "Marie Curie",
            comment: "C'est pas vrai Albert, tu as mangé une pivoine, c'est une fleur!",
            date: new Date("1905-05-30")
          },
          {
            id: 3,
            name: "Albert Einstein",
            comment: "Oui mais c'était délicieux!",
            date: new Date("1905-05-30")
          },
          {
            id: 4,
            name: "Marie Curie",
            comment: "Quoi ??? Mais tu es fou Albert!",
            date: new Date("1905-05-30")
          }
        ]
      },
      {
        id: 23,
        name: "La Poinsettia",
        signification: "En outre connu pendant que Noël tiennent le premier rôle et la fleur de Noël, il a indiqué qu'association de poinsettias la' avec Noël vient d'une légende mexicaine. L'histoire raconte qu'un enfant, qui n'avait pas les moyens d'offrir un plus gros cadeau, a ramassé de mauvaises herbes sur le côté de la route pour les déposer sur l'autel de l'église la veille de Noël. La congrégation a alors été témoin d'un miracle de Noël, les mauvaises herbes se sont transformées en fleurs brillantes rouges et vertes. Considéré comme un symbole de pureté par les Aztèques, dans le langage des fleurs actuel, les poinsettias rouges, blancs ou roses, la fleur de naissance du mois de décembre, symbolisent la bonne humeur et le succès; ils sont censés apporter des vœux de joie et de célébration.",
        color: [FlowerColors.RED, FlowerColors.WHITE],
        images: [
          {
            src: "../../../assets/flowers/poinsettia/poinsettia.jpg",
          },
          {
            src: "../../../assets/flowers/poinsettia/poinsettia2.jpg",
          },
          {
            src: "../../../assets/flowers/poinsettia/poinsettia3.jpg",
          }
        ],
        saison: [FlowerSeasons.AUTUMN, FlowerSeasons.WINTER],
        note: 0,
        events: [FlowerEvents.MARRIAGE, FlowerEvents.FAIRE_PLAISIR],
        comments: [
          {
            id: 1,
            name: "Mohammed Ali",
            comment: "Quand je vais sur le ring, je me sens comme une poinsettia, fort et beau!",
            date: new Date("1974-05-30")
          },
          {
            id: 2,
            name: "Andy Warhol",
            comment: "Mais Mohammed, qu'est-ce que tu racontes? Tu ne ressembles pas du tout à une poinsettia!",
            date: new Date("1974-05-30")
          },
        ]
      },
      {
        id: 24,
        name: "La Protée",
        signification: "Parmi les plus anciennes familles de fleurs sur la terre, remontant à 300 millions d'années, la légende grecque raconte que le protea a été nommé d'après Proteus, le fils de Poséidon. Dieu de la mer qui avait le pouvoir de connaître toutes les choses passées, présentes et futures, Proteus se méfia et préféra faire une sieste sur l'île de Pharos plutôt que de faire des prophéties. Afin de dissuader ceux qui cherchaient ses services, il changeait de forme à volonté et l'on dit que la fleur de protée a été nommée pour lui parce qu'elle se présente elle aussi sous une variété étonnante de formes, de tailles, de couleurs et de textures constituant plus de 1 400 variétés. Avec ses associations mythologiques liées au changement et à la transformation, il n'est pas surprenant que, dans le langage des fleurs, le protea symbolise la diversité et le courage.",
        color: [FlowerColors.PINK, FlowerColors.WHITE],
        images: [
          {
            src: "../../../assets/flowers/protea/protea.jpg",
          },
          {
            src: "../../../assets/flowers/protea/protea2.jpg",
          },
          {
            src: "../../../assets/flowers/protea/protea3.jpg",
          }
        ],
        saison: [FlowerSeasons.SPRING, FlowerSeasons.SUMMER, FlowerSeasons.AUTUMN],
        note: 0,
        events: [FlowerEvents.AMOUR, FlowerEvents.MARRIAGE],
        comments: [
          {
            id: 1,
            name: "Sigmund Freud",
            comment: "Je suis un grand fan de la protée, je trouve que c'est une fleur très courageuse!",
            date: new Date("1905-05-30")
          }
        ]
      },
    ]
  }

  getFlowers(): Flower[] {
    return this.flowers;
  }

  findAvailibleIDForFlowerComment(id: number) {
    // Foreach comment of the flower with the id
    let max = 0;
    for (let comment of this.flowers.find(flower => flower.id === id)!.comments) {
      if (comment.id < max) {
        max = comment.id;
      }
    }
    return max + 1;
  }

  addComment(id: number, name: string, comment: string) {
    let flower: Flower = this.flowers.find(flower => flower.id === id)!;
    if (!flower) {
      throw new Error('Flower not found');
    }
    if (!name || !comment) {
      throw new Error('Name or comment is empty');
    }
    this.flowers.find(flower => flower.id === id)!.comments.push({
      id: this.findAvailibleIDForFlowerComment(id),
      name: name,
      comment: comment,
      date: new Date()
    });
  }

  getFlowerById(id: number): Flower {
    let flower: Flower = this.flowers.find(flower => flower.id === id)!;
    if (!flower) {
      throw new Error('Flower not found');
    }
    return flower;
  }

  getAllFlowerEvents() {
    return Object.values(FlowerEvents);
  }

  getAllFlowerSeasons() {
    return Object.values(FlowerSeasons);
  }

  getAllFlowersForAnEvent(event: FlowerEvents) {
    return this.flowers.filter(flower => flower.events!.includes(event));
  }

  getFlowersBySeason(season: string): Flower[] {
      return this.flowers.filter(flower => flower.saison.find(element => element == season));
  }
}
