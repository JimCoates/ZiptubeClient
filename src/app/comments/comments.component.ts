import { Component, OnInit } from '@angular/core';
import {CommentService} from '../shared/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(public commentService: CommentService) { }

  ngOnInit() {
  }

}
