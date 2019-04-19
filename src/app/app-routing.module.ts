import { NgModule } from '@angular/core';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';

const appRoutes = [
  {path: '', component: VideosComponent},
  {path: 'upload', component: VideoUploadComponent}
];
export const appRouting = RouterModule.forRoot(appRoutes);
