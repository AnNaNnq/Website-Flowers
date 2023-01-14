import {Component, Input} from '@angular/core';
import {FlowerSeasons} from "../../../models/flowers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-saison-widget',
  templateUrl: './saison-widget.component.html',
  styleUrls: ['./saison-widget.component.scss']
})
export class SaisonWidgetComponent {
  @Input() saisons!: FlowerSeasons[];

  constructor(private router: Router) { }

  navigateToSeason(saison: FlowerSeasons) {
    this.router.navigateByUrl('saisons/'+ saison);
  }
}
