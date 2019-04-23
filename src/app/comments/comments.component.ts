import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../shared/video.service';
import { Comments } from '../comments'
import {FileUploader} from 'ng2-file-upload';
import { CommentsService } from '../shared/comments.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: any[];
  imagesFound = false;
  id: Number;
  comment: Comments;

  constructor(private videoService: VideoService, private commentService: CommentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadAllComments(this.id);
  }

  loadSingleVideoComment(route){
    return this.videoService.getIndividualVideoComment(route).subscribe(comment => this.comments = comment);
    }

    handleSuccess(data) {
      this.imagesFound = true;
      this.comments = data.json();
      console.table(this.comments);
    }


    loadAllComments(route) {
      return this.videoService.getIndividualVideoComment(route)
        .subscribe(data => {
          this.handleSuccess(data);
        });
    }

    postComment(body: String, name: String){
      this.comment = new Comments(body,name , new Date(), this.id);
      return this.commentService.postComment(this.comment).subscribe(data => {console.log(data);
      location.reload()});
      
    }
  }


