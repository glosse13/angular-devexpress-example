import { BehaviorSubject } from 'rxjs';

export class BaseModalComponent<T> {
  public onBindingComplete: BehaviorSubject<any>;
  model!: T;
  constructor() {
    this.onBindingComplete = new BehaviorSubject(null);
  }
  bind(data: T): void {
    this.model = data ? data : ({} as T);
    this.onBindingComplete.next(data);
  }
}
