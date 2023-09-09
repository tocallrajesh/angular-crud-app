import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse
} from "@angular/common/http";
import { LoaderService } from "@app/_services";
import { tap } from "rxjs/operators";
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private _loaderService: LoaderService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this._loaderService.ShowLoader();
    return next.handle(request).pipe(
      tap(
        req => {
          if (req instanceof HttpResponse) {
            this._loaderService.HideLoader();
          }
        },
        err => {
          this._loaderService.HideLoader();
        }
      )
    );
  }
}
