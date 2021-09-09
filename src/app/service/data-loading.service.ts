import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {validateAndRewriteCoreSymbol} from "@angular/compiler-cli/src/ngtsc/imports";

@Injectable({
  providedIn: 'root'
})
export class DataLoadingService {
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this.loading.asObservable();

  constructor() {
  }

  show() {
    this.loading.next(true)
  }

  hide() {
    this.loading.next(false)
  }

}
