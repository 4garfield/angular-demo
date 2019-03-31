/**
 * Created by garfield on 2017/5/23.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  info(msg: any) {
    console.log(msg);
  }

  warn(msg: any) {
    console.warn(msg);
  }

  error(msg: any) {
    console.error(msg);
  }
}
