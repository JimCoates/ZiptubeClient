import { Component, OnInit } from '@angular/core';
import {VideoService} from '../shared/video.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: any[];
  imagesFound = false;
  searchQuery = '';
  regularDistribution = 100/3;
  video: any;

  handleSuccess(data) {
    this.imagesFound = true;
    this.videos = data.json();
    console.table(this.videos);
  }
  constructor(private videoService: VideoService, private route: ActivatedRoute) { }

  searchVideo(input: String) {
    console.log(input);
    let id: Number;
    for(let video of this.videos){
      if(video.title == input){
        id=video.id;
        location.href = 'videoview/' + id;
      } else {
        this.loadAllVidoes();
      }
    }
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
