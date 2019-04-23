import {Injectable, Output} from '@angular/core';
import { environment } from '../../environments/environment';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';

import {any} from 'codelyzer/util/function';
import { ActivatedRoute } from '@angular/router';

import { Comments } from '../comments';


class Video {
}

@Injectable()
export class VideoService {
  headers: Headers;
  video: Video;
  comment: Comments
  private query: string;
  private API_URL: string = environment.VideoAPI_URL;
  private URL: string = this.API_URL;
  private httpVar: Http;
  private selectedFile: File = null;
  private commentURL: string = environment.CommentAPI_URL;




  constructor(httpVar: Http) {
    this.httpVar = httpVar;
    this.headers = new Headers();
    this.headers.set('Content-Type', 'multipart/form-data');
  }

  public getVideo(query): Observable<Video> {
    return this.httpVar.get(this.URL);
  }



  onFileSelected(event) {
  this.selectedFile = event.target.files[0] as File;
  }

  getIndividualVideo(id:Number): Observable<Video> {
    return this.httpVar.get(this.URL + '/' + id);
  }

  getIndividualVideoComment(id:Number): Observable<any> {
    return this.httpVar.get(this.URL + '/' + id + '/' + 'comments');
  }

  postComment(comment:Comments){
    return this.httpVar.post(this.commentURL, comment);
  }






  }





