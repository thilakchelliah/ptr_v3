import { Component, OnInit } from '@angular/core';
import { DigitalUnits, DigitalUnit } from '../../model/digital-unit'

@Component({
  selector: 'app-byteconv',
  templateUrl: './byteconv.component.html',
  styleUrls: ['./byteconv.component.css']
})
export class ByteconvComponent {

  unitVal: number = 1;
  unitType: number = 1;
  jbit: number = 1;
  jbyte: number = 8 * this.jbit;
  jKB: number = 1024 * this.jbyte;
  jMB: number = 1024 * this.jKB;
  jGB: number = 1024 * this.jMB;
  jTB: number = 1024 * this.jGB;
  jPB: number = 1024 * this.jTB;
  jEB: number = 1024 * this.jPB;
  jZB: number = 1024 * this.jEB;
  jYB: number = 1024 * this.jZB;
  dgUnitList: DigitalUnit[] = [
    { Unit: "Bit", ShortCode: "Bit", Order: 1, BitUnit: this.jbit, CurVal: this.jbit },
    { Unit: "Byte", ShortCode: "Byte", Order: 2, BitUnit: this.jbyte, CurVal: this.jbyte },
    { Unit: "KiloByte", ShortCode: "KB", Order: 3, BitUnit: this.jKB, CurVal: this.jKB },
    { Unit: "MegaByte", ShortCode: "MB", Order: 4, BitUnit: this.jMB, CurVal: this.jMB },
    { Unit: "GigaByte", ShortCode: "GB", Order: 5, BitUnit: this.jGB, CurVal: this.jGB },
    { Unit: "TeraByte", ShortCode: "TB", Order: 6, BitUnit: this.jTB, CurVal: this.jTB },
    { Unit: "PetaByte", ShortCode: "PB", Order: 7, BitUnit: this.jPB, CurVal: this.jPB },
    { Unit: "ExaByte", ShortCode: "EB", Order: 8, BitUnit: this.jEB, CurVal: this.jEB },
    { Unit: "ZettaByte", ShortCode: "ZB", Order: 9, BitUnit: this.jZB, CurVal: this.jZB },
    { Unit: "YottaByte", ShortCode: "YB", Order: 10, BitUnit: this.jYB, CurVal: this.jYB },
  ];

  ConvertUnit() {
    debugger;
    var curVal = this.unitVal;
    var curType = this.unitType;
    var bitVal = 0;
    this.dgUnitList.forEach(function (obj) {
      debugger;
      if (curType == obj.Order) {
        obj.CurVal = curVal;
        bitVal = obj.CurVal * obj.BitUnit;
      }
      else if (curType < obj.Order) {
        obj.CurVal = curVal * bitVal;
      }
      else if (curType < obj.Order) {
        obj.CurVal = curVal / bitVal;
      }
    });
  }



}
