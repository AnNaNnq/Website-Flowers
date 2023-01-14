import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Flower} from "../../../models/flowers";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-up-and-down-widget',
  templateUrl: './up-and-down-widget.component.html',
  styleUrls: ['./up-and-down-widget.component.scss']
})
export class UpAndDownWidgetComponent {
  @Input() flower!: Flower;

  constructor(private _snackBar: MatSnackBar) {}

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
      this.openSnackBar("+1, Merci d'avoir partagé votre avis !");
    } else if(this.flower.voteUtilisateur === 1) {
      this.flower.voteUtilisateur = 0;
      this.flower.note = this.flower.note - 1;
      this.openSnackBar("Vous avez retiré votre avis");
    }else {
      this.flower.voteUtilisateur = 1;
      this.flower.note = this.flower.note + 2;
      this.openSnackBar("+1, Merci d'avoir partagé votre avis !");
    }
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
      this.openSnackBar("-1, Merci d'avoir partagé votre avis !");
    }
    else if(this.flower.voteUtilisateur === -1) {
      this.flower.voteUtilisateur = 0;
      this.flower.note = this.flower.note + 1;
      this.openSnackBar("Vous avez retiré votre avis");
    }
    else {
      this.flower.voteUtilisateur = -1;
      this.flower.note = this.flower.note - 2;
      this.openSnackBar("-1, Merci d'avoir partagé votre avis !");
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Fermer", {
      duration: 2000,
    });
  }
}
