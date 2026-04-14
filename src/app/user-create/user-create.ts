import { Component, computed, inject, output, signal } from '@angular/core';
import { ApiService, User } from '../api.service';

@Component({
  selector: 'app-user-create',
  standalone: false,
  templateUrl: './user-create.html',
  styleUrl: './user-create.css'
})
export class UserCreate {
  apiService = inject(ApiService);
  
  userCreated = output<User>();
  cancel = output<void>();

  formData = signal<Partial<User>>({
    name: '',
    email: '',
    gender: 'male',
    status: 'active'
  });
  
  submitting = signal(false);

  updateField(field: keyof User, value: any) {
    this.formData.update(data => ({ ...data, [field]: value }));
  }

  isValid = computed(() => {
    const data = this.formData();
    return !!data.name && !!data.email && !!data.gender && !!data.status;
  });

  onSubmit() {
    if (!this.isValid()) return;
    this.submitting.set(true);
    this.apiService.createUser(this.formData()).subscribe({
      next: (newUser) => {
        this.submitting.set(false);
        this.userCreated.emit(newUser);
      },
      error: (err) => {
        this.submitting.set(false);
        alert('Error creating user: ' + JSON.stringify(err.error));
      }
    });
  }
}
