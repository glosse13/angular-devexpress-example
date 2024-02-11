import { IEntity } from "./IEntity";

export interface ISocial extends IEntity{
    link:string;
    name:string;
    description:string;
}