import { Component } from '@angular/core';
import {FlowersService} from "../../services/flowers.service";
import {FlowerEvents} from "../../models/flowers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent {
  evenements!: FlowerEvents[];

  constructor(private flowersService: FlowersService, private router: Router) {}

  ngOnInit(): void {
    this.evenements = this.flowersService.getAllFlowerEvents();
  }

  navigateToEvent(evenement: string) {
    this.router.navigateByUrl('evenements/'+ evenement);
  }
}
