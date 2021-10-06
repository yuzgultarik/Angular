import { Component, NgZone, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { FormControl, FormGroup } from '@angular/forms';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = new Array<Product>();
  id: any;
  productdata= new Product();

  constructor(private _productService: ProductService) { }


  ngOnInit() {

    this.getServer();
  }

  getServer() {
    this._productService.getAll().subscribe(
      (response: Array<Product>) => {
        this.products = response;
        console.log(this.products);
      },
      error => {
        console.log('urun sisteminde hata var' + error)
      });
  }


  UrunSil(silinecekid: any) {
    this.id = silinecekid;

    //alert(silinecekid);
    this._productService.deleteProduct(this.id).subscribe(
      response => {
        console.log("Ürün silindi");
        this.getServer();
      },
      error => {
        console.log("Ürün silme hatalı" + error);
      }
    )

  }


  product_ekle(){

    this._productService.createProduct(this.productdata).subscribe(
      response => {
        console.log('eklendi');
       
      }, error => {
        console.log('eklenmedi', error);
        this.refresh();
      });
    
  }


  refresh(): void {
    window.location.reload();
  };

/*
  urun_ekle() {
    alert("Ürün ekleme servisi");
  }
  urun_sil() {
    alert("Ürün silme servisi");
  }
  urun_guncelle() {
    alert("Ürün Güncelleme servisi");
  }
*/


}
