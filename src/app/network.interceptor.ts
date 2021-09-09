import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataLoadingService} from "./service/data-loading.service";
import {finalize} from "rxjs/operators";

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(private loader: DataLoadingService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request).pipe(
      finalize(() => {
        this.loader.hide();
        console.log('Data Loaded Successfully')
      }))

  }
}
