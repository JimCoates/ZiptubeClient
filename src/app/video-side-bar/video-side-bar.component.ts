import { Component, OnInit } from '@angular/core';
import {VideoService} from '../shared/video.service';


@Component({
  selector: 'videosidebar',
  templateUrl: './video-side-bar.component.html',
  styleUrls: ['./video-side-bar.component.scss']
})
export class VideoSideBarComponent implements OnInit {

  videos: any[];
  imagesFound = false;
  searchQuery = '';


  handleSuccess(data) {
    this.imagesFound = true;
    this.videos = data.json();
    console.table(this.videos);
  }
  constructor(private videoService: VideoService) { }

  searchVideo() {
    console.log(this.searchQuery);
    return this.videoService.getVideo(this.searchQuery)
      .subscribe(data => {
        this.handleSuccess(data);
      });
  }

  loadAllVidoes() {
    console.log(this.searchQuery);
    return this.videoService.getVideo(this.searchQuery)
      .subscribe(data => {
        this.handleSuccess(data);
      });
  }


  ngOnInit() {
    this.loadAllVidoes();
  }

}