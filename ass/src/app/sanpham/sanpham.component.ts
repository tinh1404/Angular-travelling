import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-sanpham',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './sanpham.component.html',
  styleUrl: './sanpham.component.css'
})
export class SanphamComponent {
  productsHot: ProductInterface[] = [];
  productsTrongNuoc: ProductInterface[] = [];
  productsQuocTe: ProductInterface[] = [];
  productService: ProductService = inject(ProductService);
  selectedSort: string = 'asc';
  products: ProductInterface[] = [];
  p: number = 1; // Biến p là biến điều khiển phân trang
  constructor() {
    this.productService.getListProducts('http://localhost:3000/products?hot=1').then((data: ProductInterface[]) => {
      this.productsHot = data;
      console.log(this.productsHot);
    }
    );

    this.productService.getListProducts('http://localhost:3000/products?kind=trong nước').then((data: ProductInterface[]) => {
      this.productsTrongNuoc = data;
      console.log(this.productsTrongNuoc);
    }
    );

    this.productService.getListProducts('http://localhost:3000/products?kind=quốc tế').then((data: ProductInterface[]) => {
      this.productsQuocTe = data;
      console.log(this.productsQuocTe);
    }
    );

    this.productService.getListProducts('http://localhost:3000/products').then((data: ProductInterface[]) => {
      this.products = data;
      console.log(this.products);
    }
    );

  }
  onSortChange(): void {
    if (this.selectedSort === 'asc') {
      this.products.sort((a, b) => a.sale - b.sale); // Sắp xếp tăng dần
      console.log('tăng');

    } else {
      this.products.sort((a, b) => b.sale - a.sale); // Sắp xếp giảm dần
      console.log('giảm');
    }
  }
  
  onChoiceDay(): void {
    var mang = this.products.map(function(item: ProductInterface) {
      return item.calendar.split("/")[1];
    })
    console.log(mang);
    console.log(mang.filter(item=>item.length>2))
    var mang1 = mang.filter(item=>item.length>2).map(item=> parseInt(item.split(',')[0]));
    console.log(mang1);
    
    if (this.products) {
  
      // Thực hiện các thao tác khác với mảng "mang" ở đây
    }
  }
}
