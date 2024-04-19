import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,CommonModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ass';
  loggedInUser: any = {};
  productService: ProductService = inject(ProductService);

  constructor(private authService: AuthService) { }

  get user(): any {
    return this.authService.getLoggedInUser();
  }
  logout() {
    this.authService.logout();
    this.loggedInUser = {};
  }
}
