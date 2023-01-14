import { Pipe, PipeTransform } from '@angular/core';
import {FlowerEvents} from "../models/flowers";

@Pipe({
  name: 'eventIcon'
})
export class EventIconPipe implements PipeTransform {

  transform(value: FlowerEvents, ...args: unknown[]): unknown {
    switch (value) {
      case FlowerEvents.MARRIAGE:
        return 'supervisor_account';
      case FlowerEvents.NAISSANCE:
        return 'child_friendly';
      case FlowerEvents.AMOUR:
        return 'favorite_border';
      case FlowerEvents.DEUIL:
        return 'local_florist';
      case FlowerEvents.FELICITATION:
        return 'school';
      case FlowerEvents.ANNIVERSAIRE:
        return 'cake';
      case FlowerEvents.FETE_DES_MERES:
        return 'pregnant_woman';
      case FlowerEvents.FAIRE_PLAISIR:
        return 'card_giftcard';
      case FlowerEvents.REMERCIEMENTS:
        return 'local_florist';
    }
    return 'fiber_manual_record';
  }

}
