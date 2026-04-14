import { Component, input, output } from '@angular/core';
import { User } from '../api.service';

@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css'
})
export class UserDetail {
  user = input.required<User>();
  back = output<void>();
}
