import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../../models/comments";
import {CommentsService} from "../../services/comments.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {
  nouveauCommentaireFormulaire!: FormGroup;
  comments!: Comment[];

  constructor(private formBuilder: FormBuilder,
              private commentsService: CommentsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.nouveauCommentaireFormulaire = this.formBuilder.group({
      name: [null, [Validators.required]],
      comment: [null, [Validators.required]]
    }, {
      updateOn: 'change'
    });
    this.comments = this.commentsService.getAllComments();
  }

  onSubmitForm() {
    this.commentsService.rajouterCommentaire(this.nouveauCommentaireFormulaire.value);
    this.nouveauCommentaireFormulaire.reset();
  }
}
