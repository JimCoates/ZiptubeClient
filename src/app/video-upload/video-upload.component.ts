import {Component, OnInit, ViewChild} from '@angular/core';
import {VideoService} from '../shared/video.service';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../environments/environment';


// class videoSnippet {
//   constructor(public src: string, public file: File) {}
// }

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.scss']
})

export class VideoUploadComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  videos: any[];
  imagesFound = false;
  uploadQuery = '';
  selectedFile: string;
  title: string;
  private API_URL: string = environment.VideoAPI_URL;
  private URL: string = 'server/videos/' + this.title;
  public uploader: FileUploader = new FileUploader({url: this.URL});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  @ViewChild('fileInput') fileInputVariable: any;

  handleSuccess(data) {
    this.imagesFound = true;
    this.videos = data.json();
    console.table(this.videos);
  }
  uploadVideo() {
    const files = this.fileInputVariable.nativeElement.files;
    this.videoService.uploadVideo(files[0]);
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
ngOnInit() {}
  }



