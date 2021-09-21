import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
hello: FormGroup;
id: number;
  constructor(private productService: ProductService, private aR: ActivatedRoute) {
    this.aR.paramMap.subscribe((ram: ParamMap) =>{
      console.log('param'+ ram.get('id'))
      this.id = +ram.get('id');
      const product = this.getProduct(this.id);
      this.hello = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      })
    })
  }

  ngOnInit(): void {
  }

  private getProduct(id: number) {
    return this.productService.findById(id)
  }
  deleteProduct(id: number){
    this.productService.deleteProduct(id);
    this.hello.reset();
    alert("Ok Thảo đã xóa thành công")
    history.back();
  }
}
