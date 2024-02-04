import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from './interfaces/product';
import { ClientProduct } from './interfaces/incomingProduct';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl= "https://localhost:7037";
  http=inject(HttpClient)
  constructor() { }


  getAllProduct()
  {
    return this.http.get<IProduct[]>(this.apiUrl+"/api/Products")
  }

  addProduct(product:IProduct)
  {
    return this.http.post(this.apiUrl+"/api/Products",product);
  }
  getProductById(id:number)
  {
    return this.http.get<IProduct>(this.apiUrl+"/api/Products/"+id);
  }
  UpdateProductById(id:number,product:IProduct)
  {
    return this.http.put<IProduct>(this.apiUrl+"/api/Products/"+id,product);
  }

  deleteProductById(id:number)
  {
    return this.http.delete(this.apiUrl+"/api/Products/"+id);
  }
  getClientProduct()
  {
    return this.http.get<ClientProduct[]>("https://www.pqstec.com/InvoiceApps/values/GetProductListAll");
  }
  deleteAllData(): Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/api/Products/delete-all-data`);
  }
}
