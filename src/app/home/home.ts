import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  studentName: string = 'Phan Phú Quý';
  studentId: string = 'PD10948';
}
