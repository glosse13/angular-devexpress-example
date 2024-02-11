import { ElementRef } from '@angular/core';
import { ModalComponent } from '../../modules/shared/components/modal/modal.component';

export interface ModalSetupOptions {
    modalContainer: ElementRef;
    modalComponent: ModalComponent;
}
