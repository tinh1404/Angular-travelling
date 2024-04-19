import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductInterface } from '../product-interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ctsp',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ctsp.component.html',
  styleUrl: './ctsp.component.css'
})
export class CtspComponent {
  productdetail?: ProductInterface;
  products : ProductInterface[] = [];
  productService: ProductService = inject(ProductService);
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProductDetail('http://localhost:3000/products/' + id).then((data: ProductInterface) => {
      this.productdetail = data;
      console.log(this.productdetail);
    });
    this.productService.getListProducts('http://localhost:3000/products').then((data:ProductInterface[])=>{
      this.products = data;
      console.log(this.products);
    }
    );
  }
  addCart(quantity: string): void {
    if(this.productdetail) {
      this.productService.addCart(this.productdetail,parseInt(quantity,10))
      console.log(this.productService.getCartLength());
    }
  }
}
