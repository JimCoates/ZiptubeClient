import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../shared/comments.service';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../shared/video.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: any[];
  imagesFound = false;
  id: Number;

  constructor(private videoService: VideoService, private route: ActivatedRoute) { }

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
  }


