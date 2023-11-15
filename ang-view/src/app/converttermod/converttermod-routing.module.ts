import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempconvComponent } from './convertor/tempconv/tempconv.component'
import { ByteconvComponent } from './convertor/byteconv/byteconv.component'

const routes: Routes = [
  { path: 'tempc', component: TempconvComponent },
  { path: 'bytec', component: ByteconvComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConverttermodRoutingModule { }
