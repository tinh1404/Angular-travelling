import { Component, inject,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-trangchu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './trangchu.component.html',
  styleUrl: './trangchu.component.css'
})
export class TrangchuComponent implements AfterViewInit{

  productsHot: ProductInterface[] = [];
  productsTrongNuoc: ProductInterface[] = [];
  productsQuocTe: ProductInterface[] = [];
  productService: ProductService = inject(ProductService);
  constructor(private router: Router) {
    this.productService.getListProducts('http://localhost:3000/products?hot=1').then((data: ProductInterface[]) => {
      this.productsHot = data;
      // console.log(this.productsHot);
    }
    );

    this.productService.getListProducts('http://localhost:3000/products?kind=trong nước').then((data: ProductInterface[]) => {
      this.productsTrongNuoc = data;
      // console.log(this.productsTrongNuoc);
    }
    );

    this.productService.getListProducts('http://localhost:3000/products?kind=quốc tế').then((data: ProductInterface[]) => {
      this.productsQuocTe = data;
      // console.log(this.productsQuocTe);
    }
    );
    const ele = document.getElementById('myElement');
    if(ele) {
      // console.log(ele);   
    }
  }


  //Chức năng tìm kiếm
  onSearch(inputsearch: string) {
    this.productService.setKeyword(inputsearch);
    // console.log(inputsearch);
    if (this.router.url === '/timkiem') {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/timkiem']);
    } else {
      this.router.navigate(['/timkiem']);
    }
  }

  ngAfterViewInit() {
    this.changeClass();
  }
  @ViewChild('myElement') myElementRef!: ElementRef;
  changeClass() {
    const element = this.myElementRef.nativeElement;
    const screenWidth = window.innerWidth;
    // console.log(element);
    
    if (element && screenWidth < 768) {
      element.classList.add("position-static");
      element.classList.remove("position-absolute");
    } else if (element) {
      element.classList.add("position-absolute");
      element.classList.remove("position-static");
    }
  }
}
