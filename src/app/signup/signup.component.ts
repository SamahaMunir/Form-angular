import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  imports: [
    NgIf,
    FormsModule
  ],
  standalone: true
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Signup form submitted', this.user);
    }
  }
}

