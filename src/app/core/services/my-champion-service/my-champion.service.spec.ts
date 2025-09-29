import { TestBed } from '@angular/core/testing';

import { MyChampionService } from './my-champion.service';

describe('MyChampionService', () => {
  let service: MyChampionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyChampionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
