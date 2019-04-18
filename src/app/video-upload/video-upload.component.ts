import { Component, OnInit } from '@angular/core';
import {VideoService} from '../shared/video.service';

// class videoSnippet {
//   constructor(public src: string, public file: File) {}
// }

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.scss']
})
// export class VideoUploadComponent  {
//
//   selectedVideo: videoSnippet;
//   constructor(private videoService: VideoService) {
//
//   }
//   processFile(videoInput: any) {
//     debugger;
//     const file: File = videoInput.files[0];
//     const fileReader = new FileReader();
//     fileReader.addEventListener('load', (event: any) => {
//       debugger;
//       this.selectedVideo = new videoSnippet(event.target.result, file);
//     });
//     this.videoService.uploadVideo(this.selectedVideo.file).subscribe(
//       (res) => {
//         debugger;
//       },
//       (err) => {
//         debugger;
//       });
//   }
//
//     fileReader.readAsDataURL(file);
//   }


export class VideoUploadComponent implements OnInit {

  videos: any[];
  imagesFound = false;
  uploadQuery = '';

  handleSuccess(data) {
    this.imagesFound = true;
    this.videos = data.json();
    console.table(this.videos);
  }

  constructor(private videoService: VideoService) { }

  uploadVideo() {
    console.log(this.uploadQuery);
    return this.videoService.uploadVideo(this.uploadQuery)
      .subscribe(data => {
      this.handleSuccess(data);
    });
    }

  ngOnInit() {
  }
  }



