import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './components/modal/modal.component';
import { ModalBodyContainerDirective } from '../../core/directives/modal-body-container.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent, ModalBodyContainerDirective],
  imports: [CommonModule, FormsModule],
  providers: [ModalService],
  exports:[
    CommonModule,
    FormsModule,
    ModalComponent,
    ModalBodyContainerDirective,
  ]
})
export class SharedComponentsModule {}
