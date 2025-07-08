import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {

  constructor(private http: HttpClient) {
  }
  /* getProductData() {
    return [
      { name: "Mobile", brand: "Samsung", price: "25000" },
      { name: "Laptop", brand: "HP", price: "150000" },
      { name: "Washing Machine", brand: "Samsung", price: "55000" }
    ];
  } */
 getProductList(){
  const url="https://dummyjson.com/products"
  return this.http.get(url)
 }
}
