import { TestBed, inject } from '@angular/core/testing';

import { UserDatasService } from './user-datas.service';

describe('UserDatasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDatasService]
    });
  });

  it('should be created', inject([UserDatasService], (service: UserDatasService) => {
    expect(service).toBeTruthy();
  }));
});
