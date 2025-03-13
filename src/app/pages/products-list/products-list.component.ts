import { Component, signal } from '@angular/core';
import { Product } from '../../modules/products.models';

@Component({
  selector: 'app-products-list',
  imports: [],
  template: `
    
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Product 1',
      image: 'https://example.com/product1.jpg',
      price: 29.99,
      stock: 100
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://example.com/product2.jpg',
      price: 49.99,
      stock: 50
    },
    {
      id: 3,
      title: 'Product 3',
      image: 'https://example.com/product3.jpg',
      price: 19.99,
      stock: 200
    },
    {
      id: 4,
      title: 'Product 4',
      image: 'https://example.com/product4.jpg',
      price: 99.99,
      stock: 10
    },
    {
      id: 5,
      title: 'Product 5',
      image: 'https://example.com/product5.jpg',
      price: 39.99,
      stock: 75
    }
  ]);
}
