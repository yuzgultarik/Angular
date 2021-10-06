import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://localhost:5001/api/products';

  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this._httpClient.get(this.apiUrl + '/all');
  }
  createProduct(product: Product) {
    return this._httpClient.post(this.apiUrl + '/createProduct', product);
  }

  deleteProduct(silindecekid : any){
    //alert("Silinmesi için API e gönderilen id numara"+ silindecekid);  
    return this._httpClient.delete(this.apiUrl+'/deleteProduct/'+ silindecekid);

  }



}
