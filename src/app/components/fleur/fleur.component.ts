import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Flower} from "../../models/flowers";
import {Router} from "@angular/router";
import {FlowersService} from "../../services/flowers.service";

@Component({
  selector: 'app-fleur',
  templateUrl: './fleur.component.html',
  styleUrls: ['./fleur.component.scss']
})
export class FleurComponent {

  @Input() flower!: Flower;

  constructor(private router: Router, private flowerService: FlowersService) {
  }

  clickCard() {
    this.router.navigateByUrl('fleurs/' + this.flower.id);
  }
}
