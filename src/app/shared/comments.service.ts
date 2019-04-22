import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { VideoService } from './video.service';
import { Observable } from 'rxjs';
import { Comments } from '../comment';


@Injectable({
  providedIn: 'root',
})

export class CommentsService {
  private commentURL = 'server/videos'
  constructor(
    private http: HttpClient,
  ) { }

  getIndividualVideoComments(id:Number): Observable<any> {
    return this.http.get(this.commentURL + "/" + id + "/" + "comments");
  }
}
