import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: false
})
export class ProductDetailComponent implements OnInit {
  product: any;
  selectedVariant: any;
  selectedSize: any;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Lấy ID từ thanh địa chỉ (URL)
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // Giả định bạn lấy dữ liệu từ một mảng (thực tế nên dùng Service)
    // Ở đây mình lấy ví dụ tìm sản phẩm theo ID
    this.loadProductDetail(id);
  }

  loadProductDetail(id: number) {
    // Logic này sẽ tìm sản phẩm trong danh sách của bạn
    // Tạm thời mình giả định cấu trúc để hiển thị giao diện
    // Sau này bạn nên truyền productList qua một Service chung
    const storageData = localStorage.getItem('productList'); 
    if (storageData) {
      const list = JSON.parse(storageData);
      this.product = list.find((p: any) => p.id === id);
      if (this.product) {
        this.selectedVariant = this.product.variants[0];
        this.selectedSize = this.selectedVariant.sizes[0];
      }
    }
  }

  selectVariant(v: any) {
    this.selectedVariant = v;
  }

  updateQuantity(val: number) {
    if (this.quantity + val >= 1) this.quantity += val;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}