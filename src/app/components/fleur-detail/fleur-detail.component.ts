import { Component } from '@angular/core';
import {Flower} from "../../models/flowers";
import {FlowersService} from "../../services/flowers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-fleur-detail',
  templateUrl: './fleur-detail.component.html',
  styleUrls: ['./fleur-detail.component.scss']
})
export class FleurDetailComponent {
  flower!: Flower;

  constructor(private flowerService: FlowersService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.flower = this.flowerService.getFlowerById(+this.route.snapshot.params['id']);
  }

  goBack() {
    window.history.back();
  }
}
