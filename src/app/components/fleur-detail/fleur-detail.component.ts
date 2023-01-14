import { Component } from '@angular/core';
import {Flower} from "../../models/flowers";
import {FlowersService} from "../../services/flowers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-fleur-detail',
  templateUrl: './fleur-detail.component.html',
  styleUrls: ['./fleur-detail.component.scss']
})
export class FleurDetailComponent {
  flower!: Flower;
  writeCommentSectionOpen!: boolean;

  constructor(private flowerService: FlowersService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.flower = this.flowerService.getFlowerById(+this.route.snapshot.params['id']);
    this.writeCommentSectionOpen = false;
  }

  toggleWriteCommentSection() {
    this.writeCommentSectionOpen = !this.writeCommentSectionOpen;
  }

  goBack() {
    window.history.back();
  }

  addComment(id: number, title: string, comment: string) {
    if(title === '' || comment === '') {
      alert('Veuillez remplir tous les champs');
    } else {
      this.flowerService.addComment(id, title, comment);
      this.toggleWriteCommentSection();
    }
  }
}
