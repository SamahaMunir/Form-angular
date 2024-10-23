import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
    <div>
      <p>{{ user?.name }} - {{ user?.email }}</p>
      <button (click)="removeUser()">Remove</button>
    </div>
  `,
  standalone: true
})
export class UserDetailComponent {
  @Input() user: { name: string; email: string } | null = null;  // Receive individual user
  @Output() userRemoved = new EventEmitter<void>();  // Emit event when user is removed

  // Emit event when "Remove" button is clicked
  removeUser() {
    this.userRemoved.emit();
  }
}
