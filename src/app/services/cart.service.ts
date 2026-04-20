import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Mảng lưu trữ các sản phẩm trong giỏ hàng
  private items: any[] = [];

  // Thêm sản phẩm vào giỏ
  addToCart(product: any) {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ chưa (cùng ID, cùng màu, cùng size)
    const existingItem = this.items.find(item => 
      item.id === product.id && 
      item.variant === product.variant && 
      item.size === product.size
    );

    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      // Nếu chưa có, đẩy sản phẩm mới vào (mặc định selected = true để thanh toán luôn)
      this.items.push({ ...product, selected: true });
    }
  }

  // Lấy danh sách sản phẩm
  getItems() {
    return this.items;
  }

  // Hàm xóa sản phẩm
  removeItem(product: any) {
    this.items = this.items.filter(item => 
      !(item.id === product.id && 
        item.variant === product.variant && 
        item.size === product.size)
    );
  }

  // Hàm này giúp cập nhật lại toàn bộ giỏ hàng sau khi xóa
  updateItems(newItems: any[]) {
    this.items = [...newItems];
  }
}