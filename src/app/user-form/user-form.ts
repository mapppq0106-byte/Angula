import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators, 
  AbstractControl, 
  ValidationErrors, 
  ReactiveFormsModule 
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.css'],
  standalone: true, 
  imports: [
    CommonModule, 
    ReactiveFormsModule 
  ]
})
export class UserForm implements OnInit {
  // Biến quản lý trạng thái dữ liệu và validation của toàn bộ form
  userForm!: FormGroup;
  
  // Biến lưu trữ thông báo lỗi riêng cho phần xử lý file hình ảnh
  imageError: string | null = null;
  
  // Biến lưu chuỗi Base64 của ảnh để hiển thị lên phần Preview (Bên phải giao diện)
  imagePreview: string | null = null;

  constructor(private fb: FormBuilder) {}

  /**
   * Khởi tạo cấu hình form ngay khi component được load
   */
  ngOnInit(): void {
    this.userForm = this.fb.group({
      // Username: Không trống, bắt đầu bằng chữ, không ký tự đặc biệt/khoảng trắng
      username: ['', [
        Validators.required, 
        Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/)
      ]],
      
      // Họ tên: Không trống, tối thiểu 3 ký tự và thỏa mãn hàm kiểm tra fullNameValidator
      fullName: ['', [
        Validators.required, 
        Validators.minLength(3), 
        this.fullNameValidator
      ]],
      
      // Email: Không trống và phải đúng định dạng email (ví dụ: abc@gmail.com)
      email: ['', [Validators.required, Validators.email]],
      
      // Tuổi: Không trống, nằm trong khoảng từ 18 đến 60
      age: [null, [
        Validators.required, 
        Validators.min(18), 
        Validators.max(60)
      ]],
      
      // Giới tính: Bắt buộc chọn từ danh sách dropdown
      gender: ['', Validators.required],
      
      // Ảnh đại diện: Bắt buộc phải có file hợp lệ
      avatar: [null, Validators.required]
    });
  }

  /**
   * Hàm kiểm tra họ tên (Custom Validator)
   * Kiểm tra tên không chứa số, không ký tự đặc biệt và phải có từ 2 từ trở lên
   */
  fullNameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value?.trim();
    if (!value) return null;
    
    // Regex cho phép chữ cái tiếng Việt và khoảng trắng, chặn số/ký tự đặc biệt
    const namePattern = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s|_]+$/;
    const words = value.split(/\s+/); // Tách chuỗi thành mảng các từ dựa trên khoảng trắng
    
    // Trả về lỗi nếu không đúng mẫu hoặc ít hơn 2 từ
    if (!namePattern.test(value) || words.length < 2) {
      return { invalidFullName: true };
    }
    return null;
  }

  /**
   * Hàm xử lý khi người dùng chọn file ảnh
   * Kiểm tra điều kiện về dung lượng (<8MB) và độ phân giải (>400x400)
   */
  onFileChange(event: any) {
    const file = event.target.files[0]; // Lấy file đầu tiên từ sự kiện upload
    this.imageError = null;

    if (file) {
      // 1. Kiểm tra dung lượng file: 8MB = 8 * 1024 * 1024 bytes
      if (file.size > 8 * 1024 * 1024) {
        this.imageError = "File không được lớn hơn 8MB";
        this.userForm.patchValue({ avatar: null }); // Xóa giá trị trong form nếu lỗi
        this.imagePreview = null;
        return;
      }

      // 2. Dùng FileReader để đọc nội dung file để lấy độ phân giải
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result; // Gán nguồn ảnh là kết quả sau khi đọc file
        
        img.onload = () => {
          // Kiểm tra kích thước chiều rộng và chiều cao ảnh
          if (img.width <= 400 || img.height <= 400) {
            this.imageError = "Độ phân giải phải lớn hơn 400x400";
            this.userForm.patchValue({ avatar: null });
            this.imagePreview = null;
          } else {
            // Nếu ảnh hoàn toàn hợp lệ: Hiển thị preview và cập nhật vào form
            this.imagePreview = e.target.result;
            this.userForm.patchValue({ avatar: file });
            this.imageError = null;
          }
        };
      };
      reader.readAsDataURL(file); // Bắt đầu đọc file dưới dạng chuỗi URL (Base64)
    }
  }

  /**
   * Hàm xử lý khi nhấn nút gửi form (Submit)
   */
  onSubmit() {
    // Chỉ thực hiện khi toàn bộ các ràng buộc validation đã hợp lệ (valid)
    if (this.userForm.valid) {
      console.log("Dữ liệu gửi đi:", this.userForm.value);
      alert("Chúc mừng Phan Phú Quý (PD10948), bạn đã tạo User thành công!");
    } else {
      // Nếu nhấn submit khi form chưa hợp lệ, yêu cầu các ô nhập hiển thị lỗi đỏ
      this.userForm.markAllAsTouched();
    }
  }
}