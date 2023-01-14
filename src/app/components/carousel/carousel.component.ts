import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CarouselImage} from "../../models/carousel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() carouselImages!: CarouselImage[];

  @Input() firstImage!: string;
  @Output() onImageChanged = new EventEmitter<CarouselImage>();
  imageCount!: number;
  carouselIndex!: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.imageCount = this.carouselImages.length;
    this.carouselIndex = 0;
    if(this.firstImage) {
      this.carouselIndex = this.carouselImages.findIndex(image => image.title === this.firstImage);
    }
  }

  onPreviousClicked() {
    if (this.carouselIndex > 0) {
      this.carouselIndex--;
    } else {
      this.carouselIndex = this.imageCount - 1;
    }
    this.onImageChanged.emit(this.carouselImages[this.carouselIndex]);
  }

  onNextClicked() {
    if (this.carouselIndex < this.imageCount - 1) {
      this.carouselIndex++;
    } else {
      this.carouselIndex = 0;
    }

    this.onImageChanged.emit(this.carouselImages[this.carouselIndex]);
  }
}
