import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserForm } from './user-form/user-form';
import { UserPosts } from './user-posts/user-posts'; // Import component hiển thị bài viết
import { Api } from './api/api'; // Import trang quản lý API nếu bạn muốn sử dụng

const routes: Routes = [
  // 1. Trang tạo User mới (Yêu cầu Lab 6)
  { path: 'new-user', component: UserForm },

  // 2. Chức năng load bài viết của User (ID: 7984625)
  // Bạn có thể truy cập qua URL: localhost:4200/user-posts
  { path: 'user-posts', component: UserPosts },

  // 3. Trang quản lý danh sách User từ API (Dựa trên cấu trúc thư mục tham khảo)
  { path: 'api-management', component: Api },

  // Đường dẫn mặc định dẫn về trang New User
  { path: '', redirectTo: '/new-user', pathMatch: 'full' },

  // Bắt các đường dẫn không tồn tại và đẩy về Home
  { path: '**', redirectTo: '/new-user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }