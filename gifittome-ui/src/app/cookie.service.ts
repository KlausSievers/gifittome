import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  public getValue(name): any {
    var cookieString = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
    cookieString = decodeURIComponent(cookieString);
    cookieString = cookieString.substring(2); //express is prefixing json cookies with j: -> remove this befor parsing
    return JSON.parse(cookieString);
  }

}
