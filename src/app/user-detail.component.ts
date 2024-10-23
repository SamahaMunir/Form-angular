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
  @Input() user: { name: string; email: string } | null = null;
  @Output() userRemoved = new EventEmitter<void>();

  // Emit the userRemoved event to notify the parent
  removeUser() {
    this.userRemoved.emit();
  }
}
