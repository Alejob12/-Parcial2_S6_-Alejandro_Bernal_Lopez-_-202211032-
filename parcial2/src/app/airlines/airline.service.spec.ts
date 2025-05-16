/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AirlineService } from './airline.service';

describe('Service: Airline', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirlineService]
    });
  });

  it('should ...', inject([AirlineService], (service: AirlineService) => {
    expect(service).toBeTruthy();
  }));
});
