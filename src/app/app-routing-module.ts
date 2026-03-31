import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Name } from './name/name'; // Sửa từ NameComponent thành Name cho đúng file name.ts
import { ProductDetailComponent } from './product-detail/product-detail'; 

const routes: Routes = [
  { path: '', component: Name }, // Trang danh sách
  { path: 'product/:id', component: ProductDetailComponent }, // Trang chi tiết
  { path: '**', redirectTo: '' } // Quay về trang chủ nếu đường dẫn lạ
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }