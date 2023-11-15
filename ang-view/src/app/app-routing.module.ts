import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { AudiotestComponent } from './misc/audiotest/audiotest.component'
import { ColourpalComponent } from './misc/colourpal/colourpal.component'

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'format', loadChildren: () => import('./formattermod/formattermod.module').then(m => m.FormattermodModule) },
  { path: 'maud', component: AudiotestComponent },
  { path: 'convert', loadChildren: () => import('./converttermod/converttermod.module').then(m => m.ConverttermodModule) },
  { path: 'colourp', component: ColourpalComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
