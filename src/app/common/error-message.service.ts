import { Injectable } from '@angular/core';
import { error_message } from './error-message';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  errMsg= error_message;

  constructor() { }

  getErrorMessage(){
    return this.errMsg;
  }
}
