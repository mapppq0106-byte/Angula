import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Name } from './name/name';
import { ProductDetail } from './product-detail/product-detail';
import { Home } from './home/home';
import { Cart } from './components/cart/cart'; // 1. Import Cart component

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'product', component: Name },
  { path: 'product/:id', component: ProductDetail },
  { path: 'cart', component: Cart }, // 2. Thêm route cho giỏ hàng
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }