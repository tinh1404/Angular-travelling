import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  email:string= ''
  constructor() {}
  ngOnInit(): void {
    // forgotPassword() {

    // }
  }
}
