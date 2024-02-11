import { Injectable } from '@angular/core';
import { BaseService } from '../../../core/common/base-service';
import { ISocial } from '../../../core/models/ISocial';

@Injectable({
  providedIn: 'root',
})
export class SocialService extends BaseService<ISocial> {
  constructor() {
    super();
    this.serviceUrl = 'socials';
  }
}
