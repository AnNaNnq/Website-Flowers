import {Injectable} from '@angular/core';
import {Comment} from "../models/comments";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments!: Comment[];

  constructor() {
    this.comments = [
      {
        id: 1,
        name: "IlovvvveFlowers",
        comment: "J'ai un enterrement de vie de jeune fille à organiser et je ne sais pas quoi faire. J'ai pensé à un thème fleurs mais je ne sais pas comment m'y prendre. Pouvez-vous m'aider ? Quel genre de fleurs choisir ?",
        date: new Date("2022-06-01")
      },
      {
        id: 2,
        name: "Newbie",
        comment: "Je suis une nouvelle mariée et je ne sais pas comment choisir mes fleurs. Pouvez-vous m'aider ?",
        date: new Date("2022-03-23")
      },
      {
        id: 3,
        name: "Steph7",
        comment: "Mon mari et moi sommes fâchés, et je recherche une fleur pour m'excusez. Pouvez-vous m'aider ?",
        date: new Date("2021-06-12")
      },
      {
        id: 4,
        name: "UneMaman",
        comment: "Je suis maman et je recherche une fleur pour ma fille. Que me conseillez-vous ?",
        date: new Date("2013-06-30")
      },
      {
        id: 5,
        name: "Dark Vador",
        comment: "Je suis contre les fleurs. Je ne les aime pas. Pouvez-vous me donner des arguments pour les aimer ?",
        date: new Date("2009-06-01")
      },
      {
        id: 6,
        name: "JeanLeChien",
        comment: "Je suis un chien et je recherche une fleur pour mon maître. Pouvez-vous m'aider ?",
        date: new Date("2022-06-01")
      },
      {
        id: 7,
        name: "MarieCurie",
        comment: "Je suis une scientifique et je recherche une fleur pour mon laboratoire, celles que j'ai n'arrêtent pas de mourir.",
        date: new Date("1905-08-21")
      },
      {
        id: 8,
        name: "PierreCurie",
        comment: "Ma femme laisse mourir ses fleurs, je voudrais une fleur qui n'a pas besoin de beaucoup d'eau.",
        date: new Date("1905-08-22")
      },
      {
        id: 9,
        name: "Kikiki879",
        comment: "C'est la fête des mères, et je voudrais trouver un bouquet pour ma mère, mais nous ne sommes pas en très bons thermes en ce moment. Je voudrais un bouquet qui lui fasse comprendre que je l'aime et que je m'excuse.",
        date: new Date("2023-01-10")
      },
      {
        id: 10,
        name: "Sophie&Max",
        comment: "Nos amis vont bientôt avoir leur bébé, et ils ont perdu un enfant il y a quelques temps, nous aimerions un bouquet ou une fleur qui dit félicitation pour le bébé et désolée pour votre perte.",
        date: new Date("2018-11-15")
      }
    ]
  }

  getAllComments() {
    return this.comments;
  }

  rajouterCommentaire(formValue: { name: string, comment: string }) {
    const comment: Comment = {
      ...formValue,
      id: this.comments[this.comments.length - 1].id + 1,
      date: new Date()
    };
    this.comments.push(comment);
  }
}
