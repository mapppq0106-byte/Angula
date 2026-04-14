import { Component, signal, ViewChild } from '@angular/core';
import { User } from '../api.service';
import { UserList } from '../user-list/user-list';

type ViewState = 'none' | 'detail' | 'create' | 'edit';

@Component({
  selector: 'app-api',
  standalone: false,
  templateUrl: './api.html',
  styleUrl: './api.css'
})
export class Api {
  @ViewChild(UserList) userList!: UserList;
  
  viewState = signal<ViewState>('none');
  selectedUser = signal<User | undefined>(undefined);

  openCreateForm() {
    this.viewState.set('create');
    this.selectedUser.set(undefined);
  }

  onUserSelect(user: User) {
    this.selectedUser.set(user);
    this.viewState.set('detail');
  }

  onEditUser(user: User) {
    this.selectedUser.set(user);
    this.viewState.set('edit');
  }

  onUserCreated(user: User) {
    this.viewState.set('none');
    this.userList.refresh();
  }

  onUserUpdated(user: User) {
    this.viewState.set('none');
    this.selectedUser.set(undefined);
    this.userList.refresh();
  }

  cancelAction() {
    this.viewState.set('none');
    this.selectedUser.set(undefined);
  }
}
