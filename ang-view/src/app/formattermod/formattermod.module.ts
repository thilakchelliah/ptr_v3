import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormattermodRoutingModule } from './formattermod-routing.module';
import { JsonfmtComponent } from './formatters/jsonfmt/jsonfmt.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    JsonfmtComponent
  ],
  imports: [
    CommonModule,
    FormattermodRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class FormattermodModule { }
