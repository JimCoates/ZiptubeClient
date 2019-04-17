import { Component, OnInit } from '@angular/core';
import {VideoService} from '../shared/video.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

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



  ngOnInit() {
  }

}
