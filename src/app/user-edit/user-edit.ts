import { Component, computed, effect, inject, input, output, signal } from '@angular/core';
import { ApiService, User } from '../api.service';

@Component({
  selector: 'app-user-edit',
  standalone: false,
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css'
})
export class UserEdit {
  apiService = inject(ApiService);
  
  user = input.required<User>();
  
  userUpdated = output<User>();
  cancel = output<void>();

  formData = signal<Partial<User>>({});
  submitting = signal(false);

  constructor() {
    effect(() => {
      this.formData.set({ ...this.user() });
    });
  }

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
    const updatedData = this.formData();
    this.apiService.updateUser(this.user().id, updatedData).subscribe({
      next: (updatedUser) => {
        this.submitting.set(false);
        this.userUpdated.emit(updatedUser);
      },
      error: (err) => {
        this.submitting.set(false);
        alert('Error updating user: ' + JSON.stringify(err.error));
      }
    });
  }
}
