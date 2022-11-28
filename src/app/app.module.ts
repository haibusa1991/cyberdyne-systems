import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./_shared/header/header.component";
import {FooterComponent} from "./_shared/footer/footer.component";
import {HomeComponent} from "./_views/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
