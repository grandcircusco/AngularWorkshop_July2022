import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RedditResponse, RedditResponseData, Child } from 'src/app/interfaces/reddit-api-model';
import { RedditApiService } from 'src/app/services/reddit-api.service';

import { RedditListComponent } from './reddit-list.component';

fdescribe('RedditListComponent', () => {
  let component: RedditListComponent;
  let fixture: ComponentFixture<RedditListComponent>;
  let fakeRedditApiService: RedditApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditListComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedditListComponent);
    fakeRedditApiService = TestBed.inject(RedditApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('.ngOnInit', () => {
    it('should call RedditApiService.fetchAww()', () => {
      // Arrange
      let redditApiServiceSpy = spyOn(fakeRedditApiService, 'fetchAww')
      .and.returnValue(of(
        { data: {
          children: [{} as Child]
        } as RedditResponseData
      } as RedditResponse));

      // Act
      component.ngOnInit();

      // Assert
      expect(redditApiServiceSpy).toHaveBeenCalled();
    });
  });
});
