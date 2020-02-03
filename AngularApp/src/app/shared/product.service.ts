import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  selectedProduct: Product;
  products: Product[];
  readonly baseURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  postProduct(emp: Product) {
    return this.http.post(this.baseURL, emp);
  }

  getProductList() {
    return this.http.get(this.baseURL);
  }

  putProduct(emp: Product) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteProduct(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
