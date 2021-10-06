import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  productdata= new Product();

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
  }

  urun_ekle() {
    this._productService.createProduct(this.productdata).subscribe(
      response => {
        console.log('eklendi');
       
      }, error => {
        console.log('eklenmedi', error);
        this.refresh();
      });
  }
  
  refresh(): void {
    alert("sayfa yenilendi");
    window.location.reload();
  };




}
