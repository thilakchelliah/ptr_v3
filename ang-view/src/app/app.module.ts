import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './shared/menu/menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { WarningsectionComponent } from './shared/warningsection/warningsection.component';
//Internal components
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { AudiotestComponent } from './misc/audiotest/audiotest.component';

//external modules 
import { AudioContextModule } from 'angular-audio-context';

import { ColourpalComponent } from './misc/colourpal/colourpal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    WarningsectionComponent,
    HomepageComponent,
    AudiotestComponent,
    ColourpalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule ,
    AudioContextModule.forRoot('balanced')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
