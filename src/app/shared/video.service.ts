import { Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import {any} from 'codelyzer/util/function';


class Video {
}

@Injectable()
export class VideoService {
  headers: Headers;
  video: Video;
  private query: string;
  private API_URL: string = environment.VideoAPI_URL;
  // private URL: string = this.API_URL + '&q=';
  private URL: string = this.API_URL;
  private perPage = '&per_page=10';

  private httpVar: Http;
  private selectedFile: File = null;

  constructor(httpVar: Http) {
    this.httpVar = httpVar;
    this.headers = new Headers();
    this.headers.set('Content-Type', 'multipart/form-data');
  }

  public getVideo(query): Observable<Video> {
    // return this.httpVar.get(this.URL + query + this.perPage);
    return this.httpVar.get(this.URL);
  }

  onFileSelected(event) {
  this.selectedFile = event.target.files[0] as File;
  }

  // public uploadVideo(video: string): Observable<Video> {
  //   const formData = new FormData();
  //   formData.append('video', video);
  //   return this.httpVar.post(this.URL, formData);
  // }

  // uploadVideo(event) {

    // const file = event.target.videos[0];
    // console.log(this.video);

  // submitVidoe(video: Video) {
  //   const body = JSON.stringify(video);
  //   // const headers = new Headers({'Content-Type': 'application/json'});
  //   const options = new RequestOptions();
  //
  //   console.log(body.toString());
  //
  //   return this.httpVar
  //     .post(this.URL, body, options);
  //   }

    uploadVideo(file): Promise<any> {
    // Note that setting a content-type header
    // for mutlipart forms breaks some built in
    // request parsers like multer in express.
    const options = {} as any; // Set any options you like
    const fd = new FormData();

    fd.append('file', file);
    fd.append('title', 'this.title');
    fd.append('desc', 'description');
    fd.append('uploadDate', 'date');
    console.log('I was called!!');
    // Send it.
    return this.httpVar.post(this.URL,
      fd, options)
      .toPromise()
      .catch((e) => {
        console.log(e);
      });
  }
  }





