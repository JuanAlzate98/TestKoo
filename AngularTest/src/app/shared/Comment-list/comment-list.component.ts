import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ComentarioServices } from '../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  constructor(
    public commentService: ComentarioServices,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getAllComents();
  }

  getAllComents() {
    this.commentService.getAllComents();
  }

  editComment(comment: Comment) {
   // this.commentService.currentComment = Object.assign({}, comment);
    this.toastrService.warning('Comment edited successfully !', 'Comment CRUD');
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe(
      (data) => {
        this.getAllComents();
        this.toastrService.error('Comment deleted successfully !', 'Comment CRUD');
      });
  }
}
