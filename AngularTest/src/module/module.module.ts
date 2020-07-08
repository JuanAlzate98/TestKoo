import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleComponent } from './module.component';
import { FormsModule } from '@angular/forms';
import { ComentarioServices } from '../app/shared/services/comment.service';
import { CommentListComponent } from '../app/shared/Comment-list/comment-list.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ModuleComponent, CommentListComponent  ],
  exports: [
    ModuleComponent,
    CommentListComponent
  ],
  providers: [
    ComentarioServices
  ]
})
export class ModuleModule { }
