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
  searchFlower!: string;
  flowers!: Flower[];
  router!: Router;

  constructor(private flowerServices: FlowersService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.flowers = this.flowerServices.getFlowers();
  }

}
