import { Component } from '@angular/core';
import { CommentsService } from './services/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private commentService: CommentsService){}
  comments;
  totalRecords;

  loadComments(event){
    this.commentService.getComments(event.first, event.rows).subscribe(res => {
      this.comments = res['comments'];
      this.totalRecords = res['total'];
    })
  }
}
