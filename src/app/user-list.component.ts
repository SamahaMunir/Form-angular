import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserDetailComponent } from './user-detail.component';  // Import the UserDetail component
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor directive

@Component({
  selector: 'app-user-list',
  template: `
    <h2>User List</h2>
    <ul>
      <li *ngFor="let user of users; let i = index">
        <app-user-detail [user]="user" (userRemoved)="removeUser(i)"></app-user-detail>
      </li>
    </ul>
  `,
  standalone: true,
  imports: [CommonModule, UserDetailComponent],  // Add CommonModule and UserDetailComponent to imports
})
export class UserListComponent {
  @Input() users: { name: string; email: string }[] = [];
  @Output() userRemovedAt = new EventEmitter<number>();

  // Notify parent when a user is removed
  removeUser(index: number) {
    this.userRemovedAt.emit(index);
  }
}
