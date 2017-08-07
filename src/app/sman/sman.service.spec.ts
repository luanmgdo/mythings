import { TestBed, inject } from '@angular/core/testing';

import { SmanService } from './sman.service';

describe('SmanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmanService]
    });
  });

  it('should be created', inject([SmanService], (service: SmanService) => {
    expect(service).toBeTruthy();
  }));
});
