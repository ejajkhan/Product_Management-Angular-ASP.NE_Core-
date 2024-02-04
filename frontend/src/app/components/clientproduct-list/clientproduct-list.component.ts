import { Component, inject } from '@angular/core';
import  {ClientProduct} from '../../interfaces/incomingProduct'
import { HttpService } from '../../http.service';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-clientproduct-list',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterLink],
  templateUrl: './clientproduct-list.component.html',
  styleUrl: './clientproduct-list.component.css'
})
export class ClientproductListComponent {
  router=inject(Router);
  toaster=inject(ToastrService);
productList:ClientProduct[]=[];
httpService=inject(HttpService);
displayedColumns:string[]=['Id','Name','Code','Price','stock'];
ngOnInit(){
this.populateFromDatabase();
}
populateFromDatabase()
{
  this.httpService.getClientProduct().subscribe(result=>{
    
    this.productList=result;
    console.log(this.productList);
  });
}

addAllData()
{
  for(const product of this.productList)
  {
    const myproduct:IProduct={
      name:product.Name!,
      description:product.Description!,
      price:product.Price!
    };

    this.httpService.addProduct(myproduct).subscribe(()=>{
      
    });
  }
  this.toaster.success("All Product Added");
}


}
