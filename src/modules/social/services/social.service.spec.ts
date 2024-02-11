/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocialService } from './social.service';

describe('Service: Social', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialService]
    });
  });

  it('should ...', inject([SocialService], (service: SocialService) => {
    expect(service).toBeTruthy();
  }));
});
