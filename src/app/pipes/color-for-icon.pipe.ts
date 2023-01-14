import { Pipe, PipeTransform } from '@angular/core';
import {FlowerColors} from "../models/flowers";

@Pipe({
  name: 'colorForIcon'
})
export class ColorForIconPipe implements PipeTransform {

  transform(value: FlowerColors, ...args: unknown[]): unknown {
    switch (value) {
      case FlowerColors.RED:
        return 'red';
      case FlowerColors.ORANGE:
        return 'orange';
      case FlowerColors.YELLOW:
        return 'yellow';
      case FlowerColors.GREEN:
        return 'green';
      case FlowerColors.BLUE:
        return 'blue';
      case FlowerColors.PURPLE:
        return 'purple';
      case FlowerColors.PINK:
        return 'pink';
      case FlowerColors.WHITE:
        return 'white';
      case FlowerColors.BLACK:
        return 'black';
      case FlowerColors.BROWN:
        return 'brown';
      default:
        return 'gray';
    }
    return 'yellow';
  }

}
