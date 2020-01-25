import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
