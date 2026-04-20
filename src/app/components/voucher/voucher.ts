// src/app/components/voucher/voucher.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.html',
  styleUrl: './voucher.css',
  standalone: false
})
export class Voucher {
  @Output() voucherChange = new EventEmitter<number>();
  
  vouchers = [
    { code: 'GIAM20', amount: 20, label: 'Giảm giá $20 cho đơn hàng' },
    { code: 'FREESHIP', amount: 0, label: 'Miễn phí vận chuyển' },
    { code: 'STUDENT', amount: 10, label: 'Ưu đãi sinh viên $10' }
  ];

  selectedAmount: number = 0;

  applyVoucher() {
    this.voucherChange.emit(Number(this.selectedAmount));
  }
}// 