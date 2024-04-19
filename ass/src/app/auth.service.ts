import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInUser: any;

  constructor() { }

  setLoggedInUser(user: any) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  getLoggedInUser() {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
  }
  logout() {
    localStorage.removeItem('loggedInUser');
  }

  //Forgot Password
  // forgotPassword(email: string) {
  //   this.fireauth.sendPasswordResetEmail(email).then(()=> {

  //   }).catch((error : any) => {
  //     // Xử lý khi có lỗi xảy ra
  //     console.log(error);
  //     alert('Something went wrong');
  //   });
  // }
}


