import {Component} from '@angular/core';
import {FlowerSeasons} from "../../models/flowers";
import {Router} from "@angular/router";

@Component({
  selector: 'app-saisons',
  templateUrl: './saisons.component.html',
  styleUrls: ['./saisons.component.scss']
})
export class SaisonsComponent {
  constructor(private router: Router,) {}

  toSeason(season: string){
    if(season == FlowerSeasons.SUMMER){
      this.router.navigateByUrl('saisons/'+FlowerSeasons.SUMMER);
    }
    if(season == FlowerSeasons.WINTER){
      this.router.navigateByUrl('saisons/'+FlowerSeasons.WINTER);
    }
    if(season == FlowerSeasons.SPRING){
      this.router.navigateByUrl('saisons/'+FlowerSeasons.SPRING);
    }
    if(season == FlowerSeasons.AUTUMN){
      this.router.navigateByUrl('saisons/'+FlowerSeasons.AUTUMN);
    }
  }

}
