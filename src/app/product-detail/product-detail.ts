import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Thêm Router
import { CartService } from '../services/cart.service'; // Import Service bạn vừa tạo

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  product: any;
  selectedVariant: any;
  selectedSizeObj: any;
  selectedImage: string = '';
  quantity: number = 1;

  // Danh sách sản phẩm mẫu (Bạn nên đưa vào một Service để dùng chung)
  allProducts = [
    {
      id: 1,
      name: 'Mũ lưỡi trai cao cấp',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng.',
      category: 'Shop> Điện thoại > Iphone',
      warranty: 'Đổi trả trong 7 ngày',
      from: 'Hà Nội',
      rating: 4.9,
      reviews: '12,5k',
      variants: [
        {
          colorName: 'Xám',
          colorCode: '#a7b0c0',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/4c/92/7b/4c927b48a896626d70b6d60d374e5115.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],

          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Trắng',
          colorCode: '#FF0000',
          price: 160,
          oldPrice: 260,
          images: ['http://i.pinimg.com/1200x/cc/b8/a1/ccb8a11d7f936ee401459aee31fff9e3.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],

          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Hồng',
          colorCode: '#00aaff',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/39/33/c1/3933c1a5b8e94f53358d0d4126b7ce2d.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],

          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 2,
      name: 'Mũ lưỡi trai cao cấp',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      category: 'Shop> Thời Trang Nam > Phụ kiện > Mũ lưỡi trai',
      warranty: 'Đổi trả trong 7 ngày',
      from: 'Hà Nội',
      rating: 4.9,
      reviews: '12,5k',
      variants: [
        {
          colorName: 'Đen',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Đỏ',
          colorCode: '#FF0000',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Xanh',
          colorCode: '#00aaff',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 3,
      name: 'Mũ lưỡi trai cao cấp',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      category: 'Shop> Thời Trang Nam > Phụ kiện > Mũ lưỡi trai',
      warranty: 'Đổi trả trong 7 ngày',
      from: 'Hà Nội',
      rating: 4.9,
      reviews: '12,5k',
      variants: [
        {
          colorName: 'Đen',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Đỏ',
          colorCode: '#FF0000',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Xanh',
          colorCode: '#00aaff',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 4,
      name: 'Mũ lưỡi trai cao cấp',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      category: 'Shop> Thời Trang Nam > Phụ kiện > Mũ lưỡi trai',
      warranty: 'Đổi trả trong 7 ngày',
      from: 'Hà Nội',
      rating: 4.9,
      reviews: '12,5k',
      variants: [
        {
          colorName: 'Đen',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Đỏ',
          colorCode: '#FF0000',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Xanh',
          colorCode: '#00aaff',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 5,
      name: 'Mũ lưỡi trai cao cấp',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      category: 'Shop> Thời Trang Nam > Phụ kiện > Mũ lưỡi trai',
      warranty: 'Đổi trả trong 7 ngày',
      from: 'Hà Nội',
      rating: 4.9,
      reviews: '12,5k',
      variants: [
        {
          colorName: 'Đen',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Đỏ',
          colorCode: '#FF0000',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Xanh',
          colorCode: '#00aaff',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 6,
      name: 'Mũ lưỡi trai cao cấp',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      category: 'Shop> Thời Trang Nam > Phụ kiện > Mũ lưỡi trai',
      warranty: 'Đổi trả trong 7 ngày',
      from: 'Hà Nội',
      rating: 4.9,
      reviews: '12,5k',
      variants: [
        {
          colorName: 'Đen',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Đỏ',
          colorCode: '#FF0000',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Xanh',
          colorCode: '#00aaff',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 7,
      name: 'Mũ lưỡi trai cao cấp',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      category: 'Shop> Thời Trang Nam > Phụ kiện > Mũ lưỡi trai',
      warranty: 'Đổi trả trong 7 ngày',
      from: 'Hà Nội',
      rating: 4.9,
      reviews: '12,5k',
      variants: [
        {
          colorName: 'Đen',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Đỏ',
          colorCode: '#FF0000',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Xanh',
          colorCode: '#00aaff',
          price: 160,
          oldPrice: 260,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 8,
      name: 'Mũ lưỡi trai cao cấp',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      category: 'Shop> Thời Trang Nam > Phụ kiện > Mũ lưỡi trai',
      warranty: 'Đổi trả trong 7 ngày',
      from: 'Hà Nội',
      rating: 4.9,
      reviews: '12,5k',
      variants: [
        {
          colorName: 'Đen',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Đỏ',
          colorCode: '#FF0000',
          price: 16000,
          oldPrice: 26000,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Xanh',
          colorCode: '#00aaff',
          price: 16000,
          oldPrice: 26000,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 9,
      name: 'Mũ lưỡi trai cao cấp',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      category: 'Shop> Thời Trang Nam > Phụ kiện > Mũ lưỡi trai',
      warranty: 'Đổi trả trong 7 ngày',
      from: 'Hà Nội',
      rating: 4.9,
      reviews: '12,5k',
      variants: [
        {
          colorName: 'Đen',
          colorCode: '#000000',
          price: 15000,
          oldPrice: 25000,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Đỏ',
          colorCode: '#FF0000',
          price: 16000,
          oldPrice: 26000,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Xanh',
          colorCode: '#00aaff',
          price: 16000,
          oldPrice: 26000,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 10,
      name: 'Mũ lưỡi trai cao cấp',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      category: 'Shop> Thời Trang Nam > Phụ kiện > Mũ lưỡi trai',
      warranty: 'Đổi trả trong 7 ngày',
      from: 'Hà Nội',
      rating: 4.9,
      reviews: '12,5k',
      variants: [
        {
          colorName: 'Đen',
          colorCode: '#000000',
          price: 15000,
          oldPrice: 25000,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Đỏ',
          colorCode: '#FF0000',
          price: 16000,
          oldPrice: 26000,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Xanh',
          colorCode: '#00aaff',
          price: 16000,
          oldPrice: 26000,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    }
    // Thêm các sản phẩm khác từ app.ts vào đây...
  ];

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private cartService: CartService
  ) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.allProducts.find(p => p.id === productId);

    if (this.product) {
      this.selectedVariant = this.product.variants[0];
      this.selectedSizeObj = this.selectedVariant.sizes[0];
      this.selectedImage = this.selectedVariant.images[0];
    }
  }

  getCurrentPrice(): number {
    return this.selectedVariant.price + this.selectedSizeObj.priceAdjustment;
  }

  selectVariant(variant: any) {
    this.selectedVariant = variant;
    this.selectedImage = variant.images[0];
    const matchingSize = variant.sizes.find((s: any) => s.size === this.selectedSizeObj.size);
    this.selectedSizeObj = matchingSize || variant.sizes[0];
  }

  selectSize(sizeObj: any) {
    this.selectedSizeObj = sizeObj;
  }

  updateQuantity(val: number) {
    if (this.quantity + val >= 1) this.quantity += val;
  }

  // Cập nhật hàm này để thực hiện liên kết
  onAddToCart() {
    if (!this.product) return;

    const itemToAdd = {
      id: this.product.id,
      name: this.product.name,
      description: this.product.description, // Để hiện ở trang Cart
      variant: this.selectedVariant.colorName,
      size: this.selectedSizeObj.size,
      price: this.getCurrentPrice(),
      quantity: this.quantity,
      image: this.selectedImage // Để hiện ảnh thumbnail ở trang Cart
    };
    
    // 1. Lưu vào kho (Service)
    this.cartService.addToCart(itemToAdd);
    
    // 2. Chuyển hướng ngay lập tức đến trang Giỏ hàng
    this.router.navigate(['/cart']);
  }
}