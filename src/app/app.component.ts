import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list.component';
import {NgIf} from '@angular/common'; // Import UserListComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [FormsModule, UserListComponent, NgIf],  // Add FormsModule and UserListComponent
})
export class AppComponent {
  // List of users in the parent component
  users: { name: string; email: string }[] = [];

  // Model for new user input
  newUser = { name: '', email: '' };

  // Message to display when user is deleted
  userRemovedMessage = false;

  // Method to add new user to the list
  addUser() {
    if (this.newUser.name && this.newUser.email) {
      this.users.push({ ...this.newUser });
      this.newUser = { name: '', email: '' };  // Reset form fields
    }
  }

  // Method to remove a user from the list
  removeUser(index: number) {
    this.users.splice(index, 1);  // Remove user from list
    this.displayUserRemovedMessage();  // Show success message
  }

  // Show success message for 3 seconds
  displayUserRemovedMessage() {
    this.userRemovedMessage = true;
    setTimeout(() => {
      this.userRemovedMessage = false;
    }, 3000);  // Hide the message after 3 seconds
  }
}
