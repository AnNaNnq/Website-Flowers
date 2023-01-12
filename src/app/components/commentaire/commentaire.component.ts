import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent {
  @Input() name!: string;
  @Input() comment!: string;
  @Input() date!: Date;
}
