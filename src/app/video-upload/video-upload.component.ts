 import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
 import {VideoService} from '../shared/video.service';
 import {FileUploader} from 'ng2-file-upload';
 import {environment} from '../../environments/environment';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.scss']
})

export class VideoUploadComponent implements OnInit {
  private myform: any;

  constructor(private videoService: VideoService) { }

  videos: any[];
  title: string;
  description: string;

  private API_URL: string = environment.VideoAPI_URL;
  private URL: string;
  public uploader: FileUploader = new FileUploader({});
  @ViewChild('fileInput') fileInputVariable: any;

   form = new FormData();
ngOnInit() {}

  addTitle() {
    this.uploader = new FileUploader({url: 'server/videos/' + this.title + ', ' + this.description});
  }
  }







