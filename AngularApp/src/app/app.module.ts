import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { DomSanitizer } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //DomSanitizer 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
