import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import {VideoService} from './shared/video.service';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FileSelectDirective} from 'ng2-file-upload';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { VideoviewComponent } from './videoview/videoview.component';
import { CommentsService} from './shared/comments.service';
import { CommentsComponent } from './comments/comments.component';
import { VideoSideBarComponent } from './video-side-bar/video-side-bar.component'








@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoUploadComponent,
    NavbarComponent,
    FileSelectDirective,
    HomeComponent,

    VideoviewComponent,
    CommentsComponent,
    CommentsComponent,
    VideoSideBarComponent


  ],
  imports: [
    BrowserModule,
    appRouting,
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
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [VideoService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
