import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageCommonService {

  private commonData: any = {};

  constructor() { }

  set(key, value) {
    this.commonData[key] = value;
  }

  get() {
    return this.commonData;
  }

}
