import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail.component';  // Import UserDetailComponent

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
  imports: [CommonModule, UserDetailComponent],  // Import CommonModule for *ngFor and UserDetailComponent
})
export class UserListComponent {
  @Input() users: { name: string; email: string }[] = [];  // Receive users array from parent
  @Output() userRemovedAt = new EventEmitter<number>();  // Notify parent when user is removed

  // Emit the index of the removed user to the parent
  removeUser(index: number) {
    this.userRemovedAt.emit(index);
  }
}
