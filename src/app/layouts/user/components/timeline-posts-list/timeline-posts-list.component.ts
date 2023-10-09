import { Component } from '@angular/core';
import { postsDummyList } from 'src/app/data/posts';
import { Post } from 'src/app/model/post,model';
import { MatDialog } from '@angular/material/dialog';
import { CommentsModalComponent } from '../comments-modal/comments-modal.component';

@Component({
  selector: 'app-timeline-posts-list',
  templateUrl: './timeline-posts-list.component.html',
  styleUrls: ['./timeline-posts-list.component.css']
})
export class TimelinePostsListComponent {
  constructor(public dialog: MatDialog) { }

  posts: Post[] = postsDummyList;

  addCommentFormOpen: boolean = false;



  openCommentsModal(postId: number) {
    this.dialog.open(CommentsModalComponent,
      {
        height: '600px',
        width: '600px',
      }
      );
  }

}
