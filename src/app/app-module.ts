import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Quan trọng để dùng | number

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app'; 
import { Name } from './name/name';
import { ProductDetailComponent } from './product-detail/product-detail'; // Đã sửa đường dẫn và tên class

@NgModule({
  declarations: [
    AppComponent, 
    Name, 
    ProductDetailComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule, 
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), 
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}