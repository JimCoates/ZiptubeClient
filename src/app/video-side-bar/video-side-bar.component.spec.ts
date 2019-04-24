import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSideBarComponent } from './video-side-bar.component';

describe('VideoSideBarComponent', () => {
  let component: VideoSideBarComponent;
  let fixture: ComponentFixture<VideoSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
