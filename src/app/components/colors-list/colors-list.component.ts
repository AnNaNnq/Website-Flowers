import { Component } from '@angular/core';
import {Color} from "../../models/colors.model";
import {ColorsService} from "../../services/colors.service";

@Component({
  selector: 'app-colors-list',
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.scss']
})
export class ColorsListComponent {
  colors!: Color[];

  constructor(private colorsService: ColorsService) { }

  ngOnInit(): void {
    this.colors = this.colorsService.getAllColors();
  }
}
