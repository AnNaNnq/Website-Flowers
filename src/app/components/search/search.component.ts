import { Component } from '@angular/core';
import {Flower} from "../../models/flowers";
import {Router} from "@angular/router";
import {FlowersService} from "../../services/flowers.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchFlower!: string;
  flowers!: Flower[];
  router!: Router;

  constructor(flowerServices: FlowersService, router: Router) {
    this.flowers = flowerServices.getFlowers();
    this.router = router;
  }
}
