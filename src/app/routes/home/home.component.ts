import { Component, OnInit } from '@angular/core';

declare var globalCommon;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.getList1();
    this.getList2();
  }

  getList1() {
    // console.log(globalCommon)
    var array: any = globalCommon.cityArr;
    var list: any = [];
    array.forEach(element => {
      if (element.code != 'ZZ') {
        list.push(element)
      }
    });
    console.log(list)
    console.log(globalCommon)
    console.log("*****************")
  }

  getList2() {
    // console.log(globalCommon)
    var array: any = globalCommon.cityArr;
    var list: any = [];
    array.forEach(element => {
      if (element.code != 'HN') {
        list.push(element)
      }
    });
    console.log(list)
    console.log(globalCommon)
    console.log("////////////////")
  }
}
