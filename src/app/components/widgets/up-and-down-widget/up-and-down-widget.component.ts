import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Flower} from "../../../models/flowers";

@Component({
  selector: 'app-up-and-down-widget',
  templateUrl: './up-and-down-widget.component.html',
  styleUrls: ['./up-and-down-widget.component.scss']
})
export class UpAndDownWidgetComponent {
  @Input() flower!: Flower;

  voteUp(event: MouseEvent) {
    event.stopPropagation(); // stop propagation to clickCard()
    if (this.flower.voteUtilisateur === undefined) {
      this.flower.voteUtilisateur = 0;
    }
    if (this.flower.note === undefined) {
      this.flower.note = 0
    }
    if(this.flower.voteUtilisateur === 0) {
      this.flower.voteUtilisateur = 1;
      this.flower.note = this.flower.note + 1;
    } else if(this.flower.voteUtilisateur === 1) {
      this.flower.voteUtilisateur = 0;
      this.flower.note = this.flower.note - 1;
    }else {
      this.flower.voteUtilisateur = 1;
      this.flower.note = this.flower.note + 2;
    }
    console.log('voteUp');
  }

  voteDown(event: MouseEvent) {
    event.stopPropagation(); // stop propagation to clickCard()
    if (this.flower.voteUtilisateur === undefined) {
      this.flower.voteUtilisateur = 0;
    }
    if (this.flower.note === undefined) {
      this.flower.note = 0
    }
    if(this.flower.voteUtilisateur === 0) {
      this.flower.voteUtilisateur = -1;
      this.flower.note = this.flower.note - 1;
    }
    else if(this.flower.voteUtilisateur === -1) {
      this.flower.voteUtilisateur = 0;
      this.flower.note = this.flower.note + 1;
    }
    else {
      this.flower.voteUtilisateur = -1;
      this.flower.note = this.flower.note - 2;
    }
    console.log('voteDown');
  }
}
