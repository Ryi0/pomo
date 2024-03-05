import {TestBed} from '@angular/core/testing';

import {TimeSInkService} from './time-sink.service';

describe('TimeSInkService', () => {
  let service: TimeSInkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSInkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
