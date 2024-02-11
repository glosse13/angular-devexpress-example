import { EventEmitter } from '@angular/core';
import { IEntity } from '../models/IEntity';

export class BaseService<T extends IEntity> {
  reloadReqired: EventEmitter<void>;
  protected serviceUrl: string;
  constructor() {
    this.reloadReqired = new EventEmitter();
    this.serviceUrl = '';
  }
  find(): Array<T> {    
    return (
      JSON.parse(localStorage?.getItem(this.serviceUrl) ?? '[]') || Array<T>
    );
  }
  create(data: T): void {
    let dataList: T[] =
      JSON.parse(localStorage?.getItem(this.serviceUrl) ?? '[]') || [];
    dataList.push(data);
    localStorage?.setItem(this.serviceUrl, JSON.stringify(dataList));
  }
}
