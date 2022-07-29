import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
 
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { QuotesApiService } from './quotes-api.service';
import { Quote } from '../interfaces/quotes-api-model';

describe('QuotesApiService', () => {
  let service: QuotesApiService;
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(QuotesApiService);
    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('.fetchAllQuotes', () => {
    it('should call http.get', () => {
      // Arrange
      const testUrl = "https://dwolverton.github.io/juneteenth/public/api/quotes.json";
      const expectedResponseData: Quote[] = [{} as Quote];

      // Act
      service.fetchAllQuotes().subscribe(response => 
        expect(response).toEqual(expectedResponseData));

      // Assert
      const req = httpTestingController.expectOne(testUrl);
    
      expect(req.request.method).toEqual('GET');
    
      req.flush(expectedResponseData);
    
      httpTestingController.verify();
    });
  });
});
