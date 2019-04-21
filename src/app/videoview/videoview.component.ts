import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../video';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../shared/video.service';

@Component({
  selector: 'videoview',
  templateUrl: './videoview.component.html',
  styleUrls: ['./videoview.component.scss']
})
export class VideoviewComponent implements OnInit {
  video: any;
  imagesFound = false;
  searchQuery = '';
  id: Number;
  

  handleSuccess(data) {
    this.imagesFound = true;
    this.video = data.json();
    console.table(this.video);
  }


  constructor(private videoService: VideoService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.id = +this.route.snapshot.paramMap.get('id');
  this.loadSingleVideo(this.id);
  }

  loadSingleVideo(route){
    return this.videoService.getIndividualVideo(route).subscribe(video => this.handleSuccess(video) );


}


// constructor(private postId: ActivatedRoute, private blogApiService: BlogApiService) { }

//  ngOnInit() {
//    this.getPost(this.postId);
//    this.getTags(this.postId);
//  }

//  getTags(postId) {
//    this.blogApiService.getPostTags(postId.params.value.id).subscribe(
//      data => { this.tags = data; },
//      err => console.log(err),
//    );
 }