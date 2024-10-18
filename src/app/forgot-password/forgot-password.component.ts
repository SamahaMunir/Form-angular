import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class ForgotPasswordComponent {
  user = {
    email: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Forget Password form submitted', this.user);
    }
  }
}
