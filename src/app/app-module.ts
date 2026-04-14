import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UserForm } from './user-form/user-form';
import { Api } from './api/api';
import { UserList } from './user-list/user-list';
import { UserItem } from './user-item/user-item';
import { UserCreate } from './user-create/user-create';
import { UserEdit } from './user-edit/user-edit';
import { UserDetail } from './user-detail/user-detail';

@NgModule({
  declarations: [
    App,
    Api,
    UserList,
    UserItem,
    UserCreate,
    UserEdit,
    UserDetail,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Hỗ trợ xử lý Form Validation
    UserForm, // Standalone Component thì phải import vào đây
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(), // Hỗ trợ gọi API lấy bài viết từ server
  ],
  bootstrap: [App],
})
export class AppModule {}
