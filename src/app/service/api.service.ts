import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ProductModel} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  postProduct(data: ProductModel) {
    return this.http.post<ProductModel>('http://localhost:3000/productList/', data)
  }
  getProduct() {
    return this.http.get<any>('http://localhost:3000/productList/')
  }
  putProduct(data: any, id: number) {
    return this.http.put<ProductModel>('http://localhost:3000/productList/'+id, data)
  }
  deleteProduct(id: number) {
    return this.http.delete<any>('http://localhost:3000/productList/'+id)
  }
}
