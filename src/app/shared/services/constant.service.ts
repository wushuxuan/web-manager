import { Injectable } from '@angular/core';
import { supportingData } from '@shared/constants/supporting-data.constants';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }

  /**
  * 作用：返回常用下拉框数据
  * 返回数据形式：[{code:'BJ', label:'北京'},{code:'SH', label:'上海'}]
  */
  public getSupportingDatas(codeType: string): any[] {
    let datas = supportingData[codeType] || []
    return datas;
  }

}
