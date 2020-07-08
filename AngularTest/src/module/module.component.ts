import { Component, OnInit } from '@angular/core';
import { Comentario } from '../app/shared/models/use_cases/use_comentario';
import { ToastrService } from 'ngx-toastr';
import { ComentarioServices } from '../app/shared/services/comment.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
})
export class ModuleComponent implements OnInit {

  constructor(
    public commentService: ComentarioServices,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }


  createOrUpdateComment(currentComment: Comentario) {
    if (currentComment.id === null) {
      this.createComment(currentComment);
    } else {
      this.updateComment(currentComment);
    }
  }

  createComment(comment: Comentario) {
    this.commentService.createComment(comment).subscribe(
      (result: Comentario) => {
        this.commentService.getAllComents();
        this.toastrService.success('Comment created successfully !', 'Comment CRUD');
        this.clearComment();
      });
  }

  updateComment(comment: Comentario) {
    this.commentService.updateComment(comment).subscribe(
      (result: Comentario) => {
        this.commentService.getAllComents();
        this.toastrService.info('Comment updated successfully !', 'Comment CRUD');
        this.clearComment();
      });
  }

  clearComment() {
    this.commentService.currentComment = null;
  }
}



