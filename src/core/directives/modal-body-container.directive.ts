import { ViewContainerRef, Directive } from '@angular/core';

@Directive({ selector: '[modalBodyContainer]'})
export class ModalBodyContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
