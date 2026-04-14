import { Component, OnInit, inject, signal, output } from '@angular/core';
import { ApiService, User } from '../api.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {
  apiService = inject(ApiService);
  users = signal<User[]>([]);
  loading = signal<boolean>(true);

  editUser = output<User>();
  selectUser = output<User>();

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading.set(true);
    this.apiService.getUsers().subscribe(data => {
      this.users.set(data);
      this.loading.set(false);
    });
  }

  onDelete(user: User) {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      this.apiService.deleteUser(user.id).subscribe(() => {
        this.users.update(current => current.filter(u => u.id !== user.id));
      });
    }
  }

  onEdit(user: User) {
    this.editUser.emit(user);
  }
  
  onSelect(user: User) {
    this.selectUser.emit(user);
  }
  
  refresh() {
    this.loadUsers();
  }
}
