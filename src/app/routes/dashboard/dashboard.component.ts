import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { StorageCommonService } from '@shared/services/storage-common.service';

// //定义全局变量
// declare var globalCommon;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor(private http: _HttpClient, private store: StorageCommonService) { }

  ngOnInit() {
    this.set()
  }

  set() {
    const cityArr: any = [
      { "code": "BJ", "label": "北京" },
      { "code": "SH", "label": "上海" },
      { "code": "WH", "label": "武汉" },
      { "code": "ZZ", "label": "郑州" },
      { "code": "HN", "label": "湖南" },
      { "code": "NJ", "label": "南京" },
    ]
    this.store.set("cityArr", cityArr)
    this.get();
  }

  get() {
    console.log(this.store.get())
  }
}
