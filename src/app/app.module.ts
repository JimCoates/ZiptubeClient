import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import {VideoService} from './shared/video.service';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import{ MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'video-upload', component: VideoUploadComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoUploadComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule, 
    MatCardModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot(),
    RouterModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
