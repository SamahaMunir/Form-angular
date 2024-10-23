import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <h2>User List</h2>
    <ul>
      <li *ngFor="let user of users">{{ user.name }} - {{ user.email }}</li>
    </ul>
  `,
  standalone: true
})
export class UserListComponent {
  @Input() users: { name: string; email: string }[] = [];
}
