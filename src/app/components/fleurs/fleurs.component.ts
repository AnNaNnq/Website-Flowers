import { Component } from '@angular/core';
import {FlowersService} from "../../services/flowers.service";
import {Flower} from "../../models/flowers";

@Component({
  selector: 'app-fleurs',
  templateUrl: './fleurs.component.html',
  styleUrls: ['./fleurs.component.scss']
})
export class FleursComponent {
  flowers!: Flower[];

  constructor(flowerServices: FlowersService) {
    this.flowers = flowerServices.getFlowers();
  }
}
