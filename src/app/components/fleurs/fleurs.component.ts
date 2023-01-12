import { Component } from '@angular/core';
import {FlowersService} from "../../services/flowers.service";
import {Flower} from "../../models/flowers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fleurs',
  templateUrl: './fleurs.component.html',
  styleUrls: ['./fleurs.component.scss']
})
export class FleursComponent {
  flowers!: Flower[];
  router!: Router;

  constructor(flowerServices: FlowersService, router: Router) {
    this.flowers = flowerServices.getFlowers();
    this.router = router;
  }
}
