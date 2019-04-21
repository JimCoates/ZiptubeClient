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

import { HomeComponent } from './home/home.component';
import { VideoviewComponent } from './videoview/videoview.component';
import { VideoviewService } from './shared/videoview.service';




@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoUploadComponent,
    NavbarComponent,
    FileSelectDirective,
    HomeComponent,
    VideoviewComponent,
  

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
  ],
  providers: [VideoService, VideoviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
