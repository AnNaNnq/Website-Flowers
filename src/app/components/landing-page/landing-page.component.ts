import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  horloge : String = "../../../assets/accueil/horlogeFlore.png";
  calendrier : String = "../../../assets/accueil/calendrierFlore.jpg";
  trefle : String = "../../../assets/accueil/trefle.jpg";
}
