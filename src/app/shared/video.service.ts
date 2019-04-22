import { Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';

import {any} from 'codelyzer/util/function';
import { ActivatedRoute } from '@angular/router';

import { CommentService } from './comment.service';


class Video {
}

@Injectable()
export class VideoService {
  headers: Headers;
  video: Video;
  private query: string;
  private API_URL: string = environment.VideoAPI_URL;
  private URL: string = this.API_URL;
  private httpVar: Http;
  private selectedFile: File = null;
  private commentService: any;



  constructor(httpVar: Http, commentService: CommentService) {
    this.httpVar = httpVar;
    this.headers = new Headers();
    this.headers.set('Content-Type', 'multipart/form-data');
  }

  public getVideo(query): Observable<Video> {
    this.commentService.add('VideoService: fetched videos');
    return this.httpVar.get(this.URL);
  }


  onFileSelected(event) {
  this.selectedFile = event.target.files[0] as File;
  }

  getIndividualVideo(id:Number): Observable<Video> {
    return this.httpVar.get(this.URL + "/" + id);
  }





  }





