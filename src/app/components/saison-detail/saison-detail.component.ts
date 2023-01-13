import { Component } from '@angular/core';
import { Flower } from "../../models/flowers";
import {FlowersService} from "../../services/flowers.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-saison-detail',
  templateUrl: './saison-detail.component.html',
  styleUrls: ['./saison-detail.component.scss']
})
export class SaisonDetailComponent {
  flowers!: Flower[];

  constructor(private flowerServices: FlowersService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const season = this.route.snapshot.params['id'];
    this.flowers = this.flowerServices.getFlowersBySeason(season);
  }

}
