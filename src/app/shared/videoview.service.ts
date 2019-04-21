import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VideoviewService {

  constructor() { }
}

// public getSingleVideo(): Observable<Video> {
//   const URL = '${this.URL}/1'
//   return this.httpVar.get<Video>(URL);
// }