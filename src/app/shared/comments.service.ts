import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VideoService } from './video.service';
import { Observable } from 'rxjs';
import { Comments } from '../comments';
import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';


@Injectable({
  providedIn: 'root',
})

export class CommentsService {
  headers: Headers;
  comment: Comment
  private httpVar: HttpClient;
  private commentURL: string = environment.CommentAPI_URL;

  constructor(httpVar: HttpClient) {
    this.httpVar = httpVar;
  }

  postComment(comment:Comments){
    var body = JSON.stringify(comment);
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: this.headers});
    return this.httpVar.post(this.commentURL, body, {headers: new HttpHeaders({'Content-Type':'application/json'})})
  }
}
