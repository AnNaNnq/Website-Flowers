import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() images!: string[];
  imageCount!: number;
  carouselIndex!: number;

  constructor() {
  }

  ngOnInit(): void {
    this.imageCount = this.images.length;
    this.carouselIndex = 0;
  }

  onPreviousClicked() {
    if (this.carouselIndex > 0) {
      this.carouselIndex--;
    } else {
      this.carouselIndex = this.imageCount - 1;
    }
  }

  onNextClicked() {
    if (this.carouselIndex < this.imageCount - 1) {
      this.carouselIndex++;
    } else {
      this.carouselIndex = 0;
    }
  }
}
