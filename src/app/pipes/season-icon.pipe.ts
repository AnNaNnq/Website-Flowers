import {Pipe, PipeTransform} from '@angular/core';
import {FlowerSeasons} from "../models/flowers";

@Pipe({
  name: 'seasonIcon'
})
export class SeasonIconPipe implements PipeTransform {

  transform(value: FlowerSeasons, ...args: unknown[]): unknown {
    switch (value) {
      case FlowerSeasons.SPRING:
        return 'spa';
      case FlowerSeasons.SUMMER:
        return 'wb_sunny';
      case FlowerSeasons.AUTUMN:
        return 'wb_cloudy';
      case FlowerSeasons.WINTER:
        return 'ac_unit';
      default:
        return 'ac_unit';
    }
    return null;
  }

}
