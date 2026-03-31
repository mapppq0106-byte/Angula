import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false
})
export class AppComponent implements OnInit {
  totalOrderPrice: number = 0;

  products = [
    {
      id: 1,
      name: 'Đế giữ điện thoại đuôi khỉ',
      description: 'Gậy đuôi khỉ xem phim tiện lợi, có thể xoay 360 độ, kẹp chắc chắn vào thành bàn hoặc đầu giường.',
      variants: [
        {
          colorName: 'Đen',
          colorCode: '#000000',
          price: 55000,
          oldPrice: 85000,
          images: ['https://picsum.photos/id/1/400/400', 'https://picsum.photos/id/2/400/400'],
          sizes: [{ size: '80', priceAdjustment: 0 }, { size: '100', priceAdjustment: 10000 }]
        },
        {
          colorName: 'Trắng',
          colorCode: '#ffffff',
          price: 58000,
          oldPrice: 90000,
          images: ['https://picsum.photos/id/3/400/400'],
          sizes: [{ size: '80', priceAdjustment: 0 }, { size: '100', priceAdjustment: 12000 }]
        }
      ]
    },
    {
      id: 2,
      name: 'Tai nghe Bluetooth Gaming',
      description: 'Âm thanh sống động, độ trễ cực thấp chuyên dụng cho game thủ. Pin trâu lên đến 20h.',
      variants: [
        {
          colorName: 'Xanh Neon',
          colorCode: '#39FF14',
          price: 250000,
          oldPrice: 450000,
          images: ['https://picsum.photos/id/10/400/400'],
          sizes: [{ size: 'Standard', priceAdjustment: 0 }]
        }
      ]
    },
    {
      id: 3,
      name: 'Ốp lưng iPhone Silicone',
      description: 'Chất liệu silicone cao cấp, chống bám vân tay và bảo vệ camera tuyệt đối.',
      variants: [
        {
          colorName: 'Hồng',
          colorCode: '#FFC0CB',
          price: 45000,
          oldPrice: 70000,
          images: ['https://picsum.photos/id/20/400/400'],
          sizes: [{ size: '13 Pro', priceAdjustment: 0 }, { size: '13 Pro Max', priceAdjustment: 15000 }]
        }
      ]
    },
    {
      id: 4,
      name: 'Cáp sạc nhanh 65W',
      description: 'Dây bọc dù siêu bền, hỗ trợ sạc nhanh cho Laptop và điện thoại Type-C.',
      variants: [
        {
          colorName: 'Xám',
          colorCode: '#808080',
          price: 120000,
          oldPrice: 180000,
          images: ['https://picsum.photos/id/30/400/400'],
          sizes: [{ size: '1m', priceAdjustment: 0 }, { size: '2m', priceAdjustment: 30000 }]
        }
      ]
    },
    {
      id: 5,
      name: 'Loa Bluetooth Mini',
      description: 'Thiết kế nhỏ gọn, chống nước IPX7, âm bass mạnh mẽ phù hợp đi du lịch.',
      variants: [
        {
          colorName: 'Đỏ',
          colorCode: '#FF0000',
          price: 350000,
          oldPrice: 500000,
          images: ['https://picsum.photos/id/40/400/400'],
          sizes: [{ size: 'V1', priceAdjustment: 0 }]
        }
      ]
    },
    {
      id: 6,
      name: 'Chuột không dây Silent',
      description: 'Click không gây tiếng động, thiết kế công thái học giúp làm việc lâu không mỏi tay.',
      variants: [
        {
          colorName: 'Bạc',
          colorCode: '#C0C0C0',
          price: 185000,
          oldPrice: 250000,
          images: ['https://picsum.photos/id/50/400/400'],
          sizes: [{ size: 'Compact', priceAdjustment: 0 }]
        }
      ]
    },
    {
      id: 7,
      name: 'Bàn phím cơ RGB',
      description: 'Switch xanh gõ cực sướng tay, đèn LED 16 triệu màu tùy chỉnh nhiều chế độ.',
      variants: [
        {
          colorName: 'Đen Led',
          colorCode: '#1a1a1a',
          price: 850000,
          oldPrice: 1200000,
          images: ['https://picsum.photos/id/60/400/400'],
          sizes: [{ size: 'Fullsize', priceAdjustment: 0 }, { size: 'TKL', priceAdjustment: -50000 }]
        }
      ]
    },
    {
      id: 8,
      name: 'Sạc dự phòng 20.000mAh',
      description: 'Dung lượng lớn, sạc được 4-5 lần iPhone, màn hình LCD hiển thị % pin.',
      variants: [
        {
          colorName: 'Trắng Nhám',
          colorCode: '#eeeeee',
          price: 420000,
          oldPrice: 650000,
          images: ['https://picsum.photos/id/70/400/400'],
          sizes: [{ size: 'QC 3.0', priceAdjustment: 0 }]
        }
      ]
    },
    {
      id: 10,
      name: 'Đèn LED để bàn thông minh',
      description: 'Bảo vệ mắt, điều chỉnh 3 chế độ ánh sáng và độ sáng bằng cảm ứng.',
      variants: [
        {
          colorName: 'Vàng Gỗ',
          colorCode: '#DEB887',
          price: 290000,
          oldPrice: 400000,
          images: ['https://picsum.photos/id/80/400/400'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'L', priceAdjustment: 50000 }]
        }
      ]
    },
    {
      id: 11,
      name: 'Tấm lót chuột cỡ lớn',
      description: 'Kích thước 80x30cm, bề mặt vải speed trơn mượt, đế cao su chống trượt.',
      variants: [
        {
          colorName: 'Bản đồ thế giới',
          colorCode: '#4B0082',
          price: 75000,
          oldPrice: 120000,
          images: ['https://picsum.photos/id/90/400/400'],
          sizes: [{ size: 'Standard', priceAdjustment: 0 }]
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Khởi tạo thuộc tính cho từng sản phẩm
    this.products.forEach((p: any) => {
      if (!p.selectedVariant) {
        p.selectedVariant = p.variants[0];
        p.selectedSizeObj = p.variants[0].sizes[0];
        p.quantity = 1;
      }
    });

    // Lưu vào localStorage
    localStorage.setItem('productList', JSON.stringify(this.products));
  }

  onTotalUpdated(total: number) {
    this.totalOrderPrice = total;
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}