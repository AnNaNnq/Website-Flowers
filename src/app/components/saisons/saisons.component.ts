import {Component} from '@angular/core';
import {Flower, FlowerSeasons} from "../../models/flowers";
import {ActivatedRoute, Router} from "@angular/router";
import {FlowersService} from "../../services/flowers.service";
import {CarouselImage} from "../../models/carousel";

@Component({
  selector: 'app-saisons',
  templateUrl: './saisons.component.html',
  styleUrls: ['./saisons.component.scss']
})
export class SaisonsComponent {

  flowers!: Flower[];
  saison!: FlowerSeasons;
  seasons!: FlowerSeasons[];
  carouselImages!: CarouselImage[];
  constructor(private flowersService: FlowersService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.seasons = this.flowersService.getAllFlowerSeasons();
    this.saison = this.route.snapshot.params['name'];
    console.log(this.saison);
    if(!this.saison){
      this.saison = FlowerSeasons.SPRING;
    }

    this.flowers = this.flowersService.getFlowersBySeason(this.saison);
    this.carouselImages = [{
      title: 'Printemps',
      src: "../../../assets/seasons/printemps.jpeg"
    }, {
      title: 'Été',
      src: "../../../assets/seasons/ete.jpeg"
    }, {
      title: 'Automne',
      src: "../../../assets/seasons/automne.jpeg"
    }, {
      title: 'Hiver',
      src: "../../../assets/seasons/hiver.jpeg"
    }];
  }

  toSeason(season: string){
    this.router.navigateByUrl('saisons/'+ season);
  }

  onImageChanged(carouselImage: CarouselImage) {
    this.saison = carouselImage.title as FlowerSeasons;
    this.flowers = this.flowersService.getFlowersBySeason(this.saison);

    console.log(console.log(carouselImage));
  }
}
