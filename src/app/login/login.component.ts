import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Login form submitted', this.user);
    }
  }
}
