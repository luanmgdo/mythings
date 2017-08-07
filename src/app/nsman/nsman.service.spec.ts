import { TestBed, inject } from '@angular/core/testing';

import { NsmanService } from './nsman.service';

describe('NsmanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NsmanService]
    });
  });

  it('should be created', inject([NsmanService], (service: NsmanService) => {
    expect(service).toBeTruthy();
  }));
});
