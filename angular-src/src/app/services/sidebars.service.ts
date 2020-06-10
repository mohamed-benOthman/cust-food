import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidebarsService {
  private state$: any = new BehaviorSubject<any>({});
  public state = this.state$.asObservable();

  /**
   * Open a sidebar
   */
  open(state: any) {
    this.state$.next(state);
  }

  /**
   * Close any active sidebar
   */
  close() {
    this.state$.next({});
  }
}
