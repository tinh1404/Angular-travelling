import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { hashSync } from 'bcryptjs';

@Component({
  selector: 'app-dangky',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './dangky.component.html',
  styleUrl: './dangky.component.css'
})
export class DangkyComponent {
  password?: string;
  repassword?: string;
  showPassword: boolean = false;

  constructor(private router: Router) {}

  resgin: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z]+$/)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^0\d{9,}$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{5,}$/),
      Validators.maxLength(20)
    ]),
    repassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{5,}$/),
      Validators.maxLength(20)
    ]),
    address: new FormControl('',[])
  })

  //Hiện mật khẩu
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  async onSubmit(): Promise<void> {
    console.log(this.resgin.value);
    try {
      const response = await fetch("http://localhost:3000/users?email=" + this.resgin.value.email);
      const data = await response.json();
      if (data.length > 0) {
        alert('Email đã tồn tại')
        return;
      }
    } catch (error) {
      console.error('lỗi', error);
    }
    try {
      const response = await fetch("http://localhost:3000/users?phone=" + this.resgin.value.phone);
      const data = await response.json();
      if (data.length > 0) {
        alert('Số điện thoại đã tồn tại')
        return;
      }
    } catch (error) {
      console.error('lỗi', error);
    }
    const hashPassword = hashSync(this.resgin.value.password, 10);

    const user = {
      name: this.resgin.value.name,
      email: this.resgin.value.email,
      phone: this.resgin.value.phone,
      password: hashPassword,
      address: this.resgin.value.address,
      role: 'user'
    }

    console.log(user);
    const url = 'http://localhost:3000/users'; // Thay đổi URL theo cài đặt JSON Server
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      this.router.navigate(['/dangnhap'])
      console.log('Đã đăng ký thành công', data);
    } catch (error) {
      console.error('lỗi', error);

    }
  }
}
