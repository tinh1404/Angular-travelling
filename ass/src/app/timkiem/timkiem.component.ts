import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductInterface } from '../product-interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timkiem',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './timkiem.component.html',
  styleUrl: './timkiem.component.css'
})
export class TimkiemComponent {
  keyword: string = '';
  productSearch: ProductInterface[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.keyword = this.productService.getKeyword();
    console.log(this.keyword);
    this.productService.getListProducts('http://localhost:3000/products').then((data: ProductInterface[]) => {
      this.productSearch = data.filter((product: ProductInterface) => product.name.toLowerCase().includes(this.keyword.toLowerCase()));
      console.log(this.productSearch);
    }
    );
  }
}
