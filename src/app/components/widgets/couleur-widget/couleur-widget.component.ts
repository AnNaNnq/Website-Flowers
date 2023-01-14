import {Component, Input} from '@angular/core';
import {FlowerColors} from "../../../models/flowers";

@Component({
  selector: 'app-couleur-widget',
  templateUrl: './couleur-widget.component.html',
  styleUrls: ['./couleur-widget.component.scss']
})
export class CouleurWidgetComponent {
  @Input() colors!: FlowerColors[];

}
