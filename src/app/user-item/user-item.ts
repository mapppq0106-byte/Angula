import { Component, input, output } from '@angular/core';
import { User } from '../api.service';

@Component({
  selector: 'app-user-item',
  standalone: false,
  templateUrl: './user-item.html',
  styleUrl: './user-item.css'
})
export class UserItem {
  user = input.required<User>();
  edit = output<User>();
  delete = output<User>();
  selectUser = output<User>();
}
