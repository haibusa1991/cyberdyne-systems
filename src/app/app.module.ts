import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProductsModule} from "./products/products.module";
import {SharedModule} from "./shared/shared.module";
import {BaseModule} from "./base/base.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BaseModule,
    CoreModule,
    ProductsModule,
    SharedModule,
  ],
  providers: [
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
