import { Type } from "@angular/core";

export interface ModalOptions{
    activeComponent: Type<any>;    
    displayHeader?: boolean;
    title: string;
    data:any;
}