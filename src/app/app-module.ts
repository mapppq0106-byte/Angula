import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common'; // Thêm CommonModule để dùng các pipe mặc định
import { FormsModule } from '@angular/forms';
import localeVi from '@angular/common/locales/vi'; // Import định dạng tiếng Việt (tùy chọn)

// Đăng ký định dạng vùng miền (giúp hiển thị dấu phẩy/chấm ở phần tiền tệ chính xác)
registerLocaleData(localeVi);

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// Import các Components trong thư mục gốc
import { Name } from './name/name';
import { ProductDetail } from './product-detail/product-detail';
import { Home } from './home/home';

// Import các Components trong thư mục components/cart
import { Cart } from './components/cart/cart';
import { Shipping } from './components/shipping/shipping';
import { Voucher } from './components/voucher/voucher';
import { OderSummary } from './components/oder-summary/oder-summary';

// Import Service (Mặc định dùng providedIn: 'root' nên không cần cho vào providers, 
// nhưng nếu bạn muốn chắc chắn thì import ở đây)
import { CartService } from './services/cart.service';

@NgModule({
  // Danh sách tất cả các Component bạn đã tạo
  declarations: [
    App,
    Name,
    ProductDetail,
    Home,
    Cart,
    Shipping,
    Voucher,
    OderSummary
  ],
  imports: [
    BrowserModule,
    CommonModule,     // Hỗ trợ các directive như *ngIf, *ngFor (nếu không dùng @if/@for mới)
    AppRoutingModule, // Quản lý chuyển trang (Router)
    FormsModule,      // Rất quan trọng: cho phép sử dụng [(ngModel)] ở trang Cart và Detail
  ],
  providers: [
    provideBrowserGlobalErrorListeners(), 
    provideClientHydration(withEventReplay()),
    // Bạn có thể thêm locale vào đây nếu muốn mặc định định dạng số cho toàn app
    // { provide: LOCALE_ID, useValue: 'vi-VN' }
  ],
  bootstrap: [App],
})
export class AppModule {}