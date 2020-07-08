import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { Comentario } from '../models/use_cases/use_comentario';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ComentarioServices {
  public allComment: any
  mockUrl: string = 'http://localhost:3000/comments';

  currentComment: Comentario = new Comentario('', '');

  constructor(
    private http: HttpClient,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  getAllComents() {
    this.ngxSpinnerService.show();
    return this.http.get<any>(this.mockUrl, headerOption).subscribe(
      (data: any) => {
        console.log(data);
        this.allComment = data;
        console.table(this.allComment);
        setTimeout(() => {
          this.ngxSpinnerService.hide();
        }, 500);
      }) }

  deleteComment(id: Number): Observable<Comentario> {
    return this.http.delete<Comentario>(this.mockUrl + '/' + id, headerOption);
  }

  createComment(comment: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.mockUrl, comment, headerOption);
  }

  updateComment(comment: Comentario): Observable<Comentario> {
    return this.http.put<Comentario>(this.mockUrl + '/' + comment.id, comment, headerOption);
  }
}
