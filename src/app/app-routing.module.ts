import { NgModule } from '@angular/core';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { VideoviewComponent } from './videoview/videoview.component';

const appRoutes = [
  {path: '', component: VideosComponent},
  {path: 'upload', component: VideoUploadComponent},
  {path: 'videoview/:id', component: VideoviewComponent}
];
export const appRouting = RouterModule.forRoot(appRoutes);
