// src/app/components/shipping/shipping.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.html',
  styleUrl: './shipping.css',
  standalone: false
})
export class Shipping {
  @Input() currentTotal: number = 0;
  goal: number = 200;

  get progress(): number {
    return Math.min((this.currentTotal / this.goal) * 100, 100);
  }
}