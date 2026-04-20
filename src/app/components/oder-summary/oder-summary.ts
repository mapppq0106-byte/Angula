// src/app/components/order-summary/oder-summary.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oder-summary',
  templateUrl: './oder-summary.html',
  styleUrl: './oder-summary.css',
  standalone: false
})
export class OderSummary {
  @Input() subtotal: number = 0;
  @Input() shipping: number = 0;
  @Input() discount: number = 0; // Thêm biến nhận mức giảm giá
  @Input() total: number = 0;

  onCheckout() {
    alert('Proceeding to checkout with total: $' + this.total);
  }
}