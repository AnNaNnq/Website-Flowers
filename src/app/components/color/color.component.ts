import {Component, Input} from '@angular/core';
import {Color} from "../../models/colors.model";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  @Input() color!: Color;
}
