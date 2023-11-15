import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonfmtComponent } from './formatters/jsonfmt/jsonfmt.component'

const routes: Routes = [
  { path: 'jsonfmt', component: JsonfmtComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormattermodRoutingModule { }
