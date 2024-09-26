import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../services/products.service';
import { Products, Product } from 'src/types';
import { ProductComponent } from '../components/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  onProductOutput(product: Product) {
    console.log(product, "output")
  }
  ngOnInit() {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((products: Products) => {
        this.products = products.items;
      });
  }
}
