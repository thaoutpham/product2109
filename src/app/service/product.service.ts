import { Injectable } from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone 12',
      price: 12000000,
      description: 'Điện Thoại cao cấp'
    }, {
      id: 2,
      name: 'Samsung note 20 ultra',
      price: 24000000,
      description: 'Điện Thoại cao cấp'
    }, {
      id: 3,
      name: 'Samsung note 10 plus',
      price: 22000000,
      description: 'Điện Thoại cao cấp'
    }, {
      id: 4,
      name: 'Iphone 12 pro max',
      price: 12000000,
      description: 'Điện Thoại cao cấp'
    },
  ];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  saveProduct(product: Product) {
    this.products.push(product);
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  updateById(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: number) {
    const product = this.findById(id);
    const index = this.products.findIndex(p => {
      return p.id === product.id;
    });
    this.products.splice(index, 1);//index vị trí phần tử bắt đầu xóa, deleteCount số lượng phần tử bắt đầu xóa
  }
}
