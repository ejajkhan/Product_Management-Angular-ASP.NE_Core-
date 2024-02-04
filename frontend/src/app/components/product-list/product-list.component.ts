import { Component, inject } from '@angular/core';
import  {IProduct} from '../../interfaces/product'
import { HttpService } from '../../http.service';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  router=inject(Router);
  toaster=inject(ToastrService);
productList:IProduct[]=[];
httpService=inject(HttpService);
displayedColumns:string[]=['id','name','description','price','action'];
ngOnInit(){
this.populateFromDatabase();
}
populateFromDatabase()
{
  this.httpService.getAllProduct().subscribe(result=>{
    
    this.productList=result;
    console.log(this.productList);
  });
}
edit(id:number)
{
  this.router.navigateByUrl("updateproduct/"+id);
}
delete(id:number)
{
  this.httpService.deleteProductById(id).subscribe(()=>{
    this.populateFromDatabase();
    this.toaster.success("Deleted Successfully");
  })
}

deleteAllData()
{
  if (confirm('Are you sure you want to delete all data?'))
  {
    
    this.httpService.deleteAllData().subscribe(()=>{
      this.populateFromDatabase();
      this.toaster.success("All Deleted Successfully");
    })



  }
}

}
