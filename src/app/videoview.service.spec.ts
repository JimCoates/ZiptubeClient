import { TestBed } from '@angular/core/testing';

import { VideoviewService } from './videoview.service';

describe('VideoviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoviewService = TestBed.get(VideoviewService);
    expect(service).toBeTruthy();
  });
});
