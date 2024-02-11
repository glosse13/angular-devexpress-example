import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ModalBodyContainerDirective } from '../../../../core/directives/modal-body-container.directive';
import { BaseModalComponent } from '../../../../core/common/base-modal-component';

@Component({
  selector: 'shared-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('globalModal') modalElement!: ElementRef;
  @ViewChild('backDrop') backDrop!: ElementRef;
  @ViewChild(ModalBodyContainerDirective)
  modalContentHost!: ModalBodyContainerDirective;
  showDisplayHeader: boolean = false;
  constructor(public modalService: ModalService) {}

  ngAfterViewInit() {
    this.modalService.setup({
      modalComponent: this,
      modalContainer: this.modalElement,
    });
  }
  onOpening(): void {
    if (this.modalContentHost) {
      this.showDisplayHeader =
        this.modalService.modalOptions.displayHeader == null
          ? false
          : !this.modalService.modalOptions.displayHeader;
      const componentRef =
        this.modalContentHost.viewContainerRef.createComponent(
          this.modalService.modalOptions.activeComponent
        );
      (componentRef.instance as BaseModalComponent<any>).bind({});
    }
  }
  onClosing(): void {
    this.modalContentHost.viewContainerRef.clear();
  }
}
