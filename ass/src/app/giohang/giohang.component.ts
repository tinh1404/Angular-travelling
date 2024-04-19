import { CommonModule } from '@angular/common';
import { Component,inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-giohang',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './giohang.component.html',
  styleUrl: './giohang.component.css'
})
export class GiohangComponent {
  cart: any = [];
  productService: ProductService = inject(ProductService);
  constructor() { }
  ngOnInit(): void {
    this.cart = this.productService.getCart();
  }
  sumMoney(): number {
    return this.productService.getSumMoney();
  }
  deleteCart(id: string): void {
    this.productService.deleteCart(id);
    this.cart = this.productService.getCart();
  }
}
