import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverttermodRoutingModule } from './converttermod-routing.module';
import { TempconvComponent } from './convertor/tempconv/tempconv.component'
import { FormsModule } from '@angular/forms';
import { ByteconvComponent } from './convertor/byteconv/byteconv.component';


@NgModule({
  declarations: [
    TempconvComponent,
    ByteconvComponent],
  imports: [
    CommonModule,
    FormsModule,
    ConverttermodRoutingModule
  ]
})
export class ConverttermodModule { }
