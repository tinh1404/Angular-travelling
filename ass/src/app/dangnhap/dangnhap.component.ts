import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { hashSync, compareSync } from 'bcryptjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dangnhap',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './dangnhap.component.html',
  styleUrl: './dangnhap.component.css'
})
export class DangnhapComponent {
  password?: string;
  showPassword: boolean = false;

  constructor(private authService: AuthService,private router: Router) { }

  loginF: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{5,}$/),
      Validators.maxLength(20)
    ]),
    ghinho: new FormControl('',[])
  })



  //Hiện mật khẩu
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }


  async onSubmit() {
    // if (this.loginF.invalid) {

    //   return
    // }
    // console.log(this.loginF.valid);

    // console.log(this.loginF.value);
    try {
      const response = await fetch('http://localhost:3000/users?email=' + this.loginF.value.email);
      const data = await response.json();
      // console.log(data);

      if (data.length > 0) {
        const user = data[0];
        const isPasswordValid = compareSync(this.loginF.value.password, user.password);
        if (isPasswordValid) {
          // const user = {
          //   name: this.loginF.value.name,
          //   email: this.loginF.value.email,
          //   address: this.loginF.value.address,
          //   ghinho: this.loginF.value.ghinho,
          //   role: 'user'
          // }
          console.log({...user,ghinho: this.loginF.value.ghinho});
          console.log(this.loginF.value.ghinho);
          
          this.router.navigate(['/']);
          this.authService.setLoggedInUser({...user,ghinho: this.loginF.value.ghinho})
          
        } else {
          alert('Tài khoản hoặc mật khẩu không đúng.');
        }
      } else {
        alert('Tài khoản hoặc mật khẩu không đúng.');
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      alert('Đã xảy ra lỗi khi đăng nhập.');
    }
  }

}
