import {Component, Input} from '@angular/core';
import {Flower} from "../../models/flowers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fleur',
  templateUrl: './fleur.component.html',
  styleUrls: ['./fleur.component.scss']
})
export class FleurComponent {

  @Input() flower!: Flower;

  constructor(private router: Router) { }

  clickCard() {
    this.router.navigateByUrl('fleurs/' + this.flower.id);
  }
}
