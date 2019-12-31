import { Component, OnInit } from '@angular/core';
import { StorageCommonService } from '@shared/services/storage-common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private store: StorageCommonService
  ) { }

  ngOnInit() {

    this.getList1();
  }

  getList1() {
    // console.log(globalCommon)
    var array: any = this.store.get().cityArr;
    var list: any = [];
    array.forEach(element => {
      if (element.code != 'ZZ') {
        list.push(element)
      }
    });
    console.log(list)
    console.log(this.store.get())
    this.getList2();
    console.log("*****************")
  }

  getList2() {
    // console.log(globalCommon)
    var array: any = this.store.get().cityArr;
    var list: any = [];
    array.forEach(element => {
      if (element.code != 'HN') {
        list.push(element)
      }
    });
    console.log(list)
    console.log(this.store.get())
    console.log("////////////////")
  }
}
