import {Component, Input} from '@angular/core';
import {FlowerEvents} from "../../../models/flowers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-events-widget',
  templateUrl: './events-widget.component.html',
  styleUrls: ['./events-widget.component.scss']
})
export class EventsWidgetComponent {
  @Input() events!: FlowerEvents[];

  constructor(private router: Router) { }

  navigateToEvent(evenement: string) {
    this.router.navigateByUrl('evenements/'+ evenement);
  }
}
