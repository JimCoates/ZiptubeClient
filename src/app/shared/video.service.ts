import { Injectable} from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';


class Video {
}

@Injectable()
export class VideoService {
  private query: string;
  private API_KEY: string = environment.VideoAPI_Key;
  private API_URL: string = environment.VideoAPI_URL;
  // private URL: string = this.API_URL + '&q=';
  private URL: string = this.API_URL;
  private perPage = '&per_page=10';

  private httpVar: Http;
  private selectedFile: File = null;

  constructor(httpVar: Http) {
    this.httpVar = httpVar;
  }

  public getVideo(query): Observable<Video> {
    // return this.httpVar.get(this.URL + query + this.perPage);
    return this.httpVar.get(this.URL);
  }

  onFileSelected(event) {
  this.selectedFile = event.target.files[0] as File;
  }


}
