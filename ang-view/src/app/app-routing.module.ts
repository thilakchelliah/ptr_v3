import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { JsonfmtComponent } from './formatters/jsonfmt/jsonfmt.component'
import { AudiotestComponent } from './misc/audiotest/audiotest.component'

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'jsonfmt', component: JsonfmtComponent },
  { path: 'maud', component: AudiotestComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
