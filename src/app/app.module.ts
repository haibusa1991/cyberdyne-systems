import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsCatalogService} from "./_core/contentProvider/products-catalog.service";
import {ProductDataService} from "./_core/contentProvider/product-data.service";
import {CoreModule} from "./_core/core.module";
import {ViewComponentsModule} from "./_view-components/view-components.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SupportModule} from "./_support/support.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ViewComponentsModule,
    BrowserAnimationsModule,
    SupportModule
  ],
  providers: [
    ProductsCatalogService,
    ProductDataService
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
