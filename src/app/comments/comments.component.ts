import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../shared/comments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comment: any[];
  id: Number;

  constructor(private commentService: CommentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadSingleVideoComment(this.id);
  }

  loadSingleVideoComment(route){
    return this.commentService.getIndividualVideoComments(route).subscribe(result => this.comment = result as any[]);
    }
  }


