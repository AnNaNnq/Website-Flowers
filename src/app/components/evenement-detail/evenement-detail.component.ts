import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Flower, FlowerEvents} from "../../models/flowers";
import {FlowersService} from "../../services/flowers.service";

@Component({
  selector: 'app-evenement-detail',
  templateUrl: './evenement-detail.component.html',
  styleUrls: ['./evenement-detail.component.scss']
})
export class EvenementDetailComponent {
  event!: FlowerEvents;
  flowers!: Flower[];
  constructor(private route: ActivatedRoute, private flowersService: FlowersService) {
  }

  ngOnInit(): void {
    this.event = this.route.snapshot.params['event'];
    this.flowers = this.flowersService.getAllFlowersForAnEvent(this.event);
  }

  goBack() {
    window.history.back();
  }
}
