import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RedditApiService } from './reddit-api.service';

describe('RedditApiService', () => {
  let service: RedditApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(RedditApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
