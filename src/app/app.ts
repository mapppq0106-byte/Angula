import { Component, signal } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Clothing Store');
  
  // Biến lưu trữ tổng tiền nhận từ component con
  totalOrderPrice: number = 0;

  // DANH SÁCH 10 SẢN PHẨM ĐÃ CẤU TRÚC LẠI ĐỂ KHỚP VỚI COMPONENT CON
  products = [
    {
      id: 1,
      name: 'Iphone',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng.',
      variants: [
        {
          colorName: 'Black',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/4c/92/7b/4c927b48a896626d70b6d60d374e5115.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Red',
          colorCode: '#FF0000',
          price: 150,
          oldPrice: 250,
          images: ['http://i.pinimg.com/1200x/cc/b8/a1/ccb8a11d7f936ee401459aee31fff9e3.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Blue',
          colorCode: '#00aaff',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/39/33/c1/3933c1a5b8e94f53358d0d4126b7ce2d.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 2,
      name: 'Mũ lưỡi trai',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      variants: [
        {
          colorName: 'Black',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Red',
          colorCode: '#FF0000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Blue',
          colorCode: '#00aaff',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 3,
      name: 'Mũ lưỡi trai',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      variants: [
        {
          colorName: 'Black',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Red',
          colorCode: '#FF0000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Blue',
          colorCode: '#00aaff',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 4,
      name: 'Mũ lưỡi trai',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      variants: [
        {
          colorName: 'Black',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Red',
          colorCode: '#FF0000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Blue',
          colorCode: '#00aaff',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 5,
      name: 'Mũ lưỡi trai',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      variants: [
        {
          colorName: 'Black',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Red',
          colorCode: '#FF0000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Blue',
          colorCode: '#00aaff',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 6,
      name: 'Mũ lưỡi trai',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      variants: [
        {
          colorName: 'Black',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Red',
          colorCode: '#FF0000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Blue',
          colorCode: '#00aaff',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 7,
      name: 'Mũ lưỡi trai',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      variants: [
        {
          colorName: 'Black',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Red',
          colorCode: '#FF0000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Blue',
          colorCode: '#00aaff',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 8,
      name: 'Mũ lưỡi trai',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      variants: [
        {
          colorName: 'Black',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Red',
          colorCode: '#FF0000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Blue',
          colorCode: '#00aaff',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 9,
      name: 'Mũ lưỡi trai',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      variants: [
        {
          colorName: 'Black',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Red',
          colorCode: '#FF0000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Blue',
          colorCode: '#00aaff',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
    {
      id: 10,
      name: 'Mũ lưỡi trai',
      description: 'Chữ thêu chuẩn, sắc nét, 3 màu đa dạng phù hợp với nhiều phong cách thời trang.',
      variants: [
        {
          colorName: 'Black',
          colorCode: '#000000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/1200x/12/f7/6f/12f76f02a816428552f66061836fa945.jpg', 'https://i.pinimg.com/736x/56/90/3c/56903cc8a49c711815245f60458827d1.jpg', 'https://i.pinimg.com/1200x/af/21/59/af215979563e9bf7aa7b60ce4ef21dcc.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Red',
          colorCode: '#FF0000',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/89/5e/da/895eda344e8a91fcf6eb24a231b8cb4e.jpg', 'https://i.pinimg.com/1200x/1d/75/15/1d751552621282f45e927383fb00e2a8.jpg', 'https://i.pinimg.com/736x/77/5f/64/775f64758cf3eb00b8d1aed077065eb6.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        },
        {
          colorName: 'Blue',
          colorCode: '#00aaff',
          price: 150,
          oldPrice: 250,
          images: ['https://i.pinimg.com/736x/d5/03/17/d5031751574d2a4ec2d7ee73e56a0a2e.jpg', 'https://i.pinimg.com/1200x/2c/ce/76/2cce76fa89bb5c2a22466fa99eedf017.jpg', 'https://i.pinimg.com/736x/ec/22/ef/ec22efe1b93fb549d06fa8f8145aed3d.jpg'],
          sizes: [{ size: 'S', priceAdjustment: 0 }, { size: 'M', priceAdjustment: 500 }, { size: 'L', priceAdjustment: 1000 }]
        }
      ]
    },
  ];

  constructor(private router: Router) {} // Inject router

  // Kiểm tra xem có đang ở trang danh sách sản phẩm hay không
  isProductPage(): boolean {
    return this.router.url === '/product';
  }
  
  /**
   * Hàm nhận tổng tiền từ Component con (app-name)
   */
  onTotalUpdated(newTotal: number) {
    this.totalOrderPrice = newTotal;
  }
}