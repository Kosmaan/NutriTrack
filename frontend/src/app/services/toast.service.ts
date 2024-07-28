import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts: { message: string; type: string }[] = [];

  getToasts() {
    return this.toasts;
  }

  show(message: string, type: string = 'success') {
    this.toasts.push({ message, type });
    setTimeout(() => this.remove(message), 3000);
  }

  private remove(message: string) {
    this.toasts = this.toasts.filter((toast) => toast.message !== message);
  }
}
