import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  standalone: false
})
export class Cart implements OnInit {
  // 1. Tạo mảng sản phẩm mẫu cố định
  readonly SAMPLE_PRODUCTS = [
    {
      id: 991,
      name: 'Premium Wireless Headphones',
      description: 'Active noise cancelling with 40h battery life.',
      price: 129,
      quantity: 1,
      selected: true,
      image: 'https://i.pinimg.com/736x/dd/2a/12/dd2a12f6caf6c71e9796e70907b45117.jpg'
    },
    {
      id: 992,
      name: 'Minimalist Leather Watch',
      description: 'Genuine leather strap with sapphire glass.',
      price: 85,
      quantity: 1,
      selected: true,
      image: 'https://i.pinimg.com/736x/52/5a/80/525a80bdb03baaf7a098e80531350dee.jpg'
    },
    {
      id: 993,
      name: 'Cotton Basic T-Shirt',
      description: '100% organic cotton, breathable fabric.',
      price: 25,
      quantity: 2,
      selected: false,
      image: 'https://i.pinimg.com/1200x/06/7d/03/067d0313c3e9482aef3804296aadd53c.jpg'
    }
  ];

  // 2. Mảng hiển thị (khởi tạo rỗng)
  products: any[] = [];
  discount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // 3. Lấy dữ liệu thực tế từ Service
    const realItems = this.cartService.getItems();
    
    // 4. LÀM MỚI danh sách bằng cách gộp mẫu và thật
    // Việc gán mới này giúp danh sách không bị cộng dồn vô hạn
    this.products = [...this.SAMPLE_PRODUCTS, ...realItems];
  }

  /**
   * Xử lý xóa sản phẩm dựa trên vị trí (index) được truyền từ HTML
   */
  onRemove(index: number) {
    const productName = this.products[index].name;

    if (confirm(`Bạn có chắc muốn xóa "${productName}" khỏi giỏ hàng?`)) {
      // 1. Xóa khỏi mảng hiển thị
      this.products.splice(index, 1);
      
      // 2. Cập nhật lại Service để đồng bộ dữ liệu gốc
      this.cartService.updateItems(this.products);
    }
  }

  get subtotal(): number {
    return this.products
      .filter(p => p.selected)
      .reduce((sum, p) => sum + (p.price * p.quantity), 0);
  }

  get shippingFee(): number {
    if (this.subtotal === 0) return 0;
    return this.subtotal >= 200 ? 0 : 20;
  }

  get totalPrice(): number {
    const total = this.subtotal + this.shippingFee - this.discount;
    return total > 0 ? total : 0;
  }

  updateQuantity(id: number, delta: number) {
    const product = this.products.find(p => p.id === id);
    if (product && product.quantity + delta >= 1) {
      product.quantity += delta;
    }
  }

  onVoucherApplied(amount: number) {
    this.discount = amount;
  }
}