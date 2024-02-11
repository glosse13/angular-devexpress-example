import { Component } from '@angular/core';
import { BaseModalComponent } from '../../../../core/common/base-modal-component';
import { ISocial } from '../../../../core/models/ISocial';
import { Observable } from 'rxjs';
import { SocialService } from '../../services/social.service';
import { ModalService } from '../../../shared/services/modal.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent extends BaseModalComponent<ISocial> {
  constructor(
    private socialService: SocialService,
    private modalService: ModalService
  ) {
    super();
  }
  private onNext(data: any) {
    this.socialService.reloadReqired.emit();
  }

  private onComplete() {
    this.modalService.close();
  }

  private onError(error: any) {
    alert('Hata Oluştu');
  }
  onSubmit(): void {
    let serviceObservable: Observable<ISocial>;
    try {
      this.socialService.create(this.model);
      this.onNext(null);
    } catch (error) {
      console.error(error)
      this.onError(error);
    }finally{
      this.onComplete()
    }    
  }
}
