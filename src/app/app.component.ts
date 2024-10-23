import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    FormsModule
  ],
})
export class AppComponent {
  title = 'My Angular App';

  // List of users
  users: { name: string; email: string }[] = [];

  // Model for new user input
  newUser = { name: '', email: '' };

  // Method to add new user to the list
  addUser() {
    if (this.newUser.name && this.newUser.email) {
      this.users.push({ ...this.newUser });
      this.newUser = { name: '', email: '' }; // Reset the form
    }
  }
}
