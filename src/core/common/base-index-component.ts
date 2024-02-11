import { EventEmitter, Type } from '@angular/core';
import { IEntity } from '../models/IEntity';
import { BaseService } from './base-service';
import { ModalService } from '../../modules/shared/services/modal.service';

export class BaseIndexComponent<T extends IEntity> {
  reloadGrid: EventEmitter<void>;
  rowData: Array<T>;
  context: any;
  constructor(
    protected baseService: BaseService<T>,
    private componentUpsert: Type<any>,
    protected modal: ModalService
  ) {
    this.rowData = [];
    this.baseService.reloadReqired
      .asObservable()
      .subscribe(() => this.loadData());
    this.reloadGrid = new EventEmitter();
  }
  loadData() {
    this.rowData = this.baseService.find();
    setTimeout(() => {
      this.reloadGrid.emit();
    }, 500);
  }
  onNewRecordClicked(): void {
    this.modal.open({
      activeComponent: this.componentUpsert,
      title: 'Yeni Kayıt Ekleme',
      displayHeader: true,
      data: null,
    });
  }
}
