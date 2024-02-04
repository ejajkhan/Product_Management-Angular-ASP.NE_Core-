import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpService } from '../../http.service';
import { IProduct } from '../../interfaces/product';
import {ActivatedRoute, Router} from '@angular/router'; 
import { ThisReceiver } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  httpService=inject(HttpService);
  toaster=inject(ToastrService);
  formBuilder=inject(FormBuilder);
  router=inject(Router);
  route=inject(ActivatedRoute);
  productForm=this.formBuilder.group({
    name:['',[Validators.required]],
    description:['',[Validators.required]],
    price:[0,[Validators.required]],
  })

  productId!:number;
  isEdit=false;

  ngOnInit()
  {
    this.productId=this.route.snapshot.params['id'];
    if(this.productId)
    {
      this.isEdit=true;
      this.httpService.getProductById(this.productId).subscribe(result=>{
        this.productForm.patchValue(result);
      })
    }
  }

  save()
  {
    const product:IProduct={
      name:this.productForm.value.name!,
      description:this.productForm.value.description!,
      price:this.productForm.value.price!
    }; 
    console.log(this.productForm.value);
    if(this.isEdit)
    {
      this.httpService.UpdateProductById(this.productId,product).subscribe(()=>{
        this.toaster.success("Updated Successfully");
      this.router.navigate(['']);  
      })
    }
    else{
      
    this.httpService.addProduct(product).subscribe(()=>{
      this.toaster.success("Added Successfully");
      this.router.navigate(['']); 
    });
    }
    
  }
}
