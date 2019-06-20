import { Injectable } from "@angular/core";

/**
 * We must declare toastr as a variable, otherwise the IDE think it's an undeclared variable
 */
declare let toastr;

@Injectable({
  providedIn: "root"
})
export class ToastrService {
  public success(message: string, title?: string) {
    toastr.success(message, title);
  }
  public warning(message: string, title?: string) {
    toastr.success(message, title);
  }
  public info(message: string, title?: string) {
    toastr.success(message, title);
  }
  public error(message: string, title?: string) {
    toastr.success(message, title);
  }
}
