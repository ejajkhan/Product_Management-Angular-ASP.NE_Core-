import { Routes } from '@angular/router';
import path from 'path';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ClientproductListComponent } from './components/clientproduct-list/clientproduct-list.component';

export const routes: Routes = [
    {
        path:"",
        component:ProductListComponent
    },
    {
        path:"productlist",
        component:ProductListComponent
    },
    {
        path:"addproduct",
        component:ProductFormComponent
    },
    {
        path:"updateproduct/:id",
        component:ProductFormComponent
    },
    {
        path:"realapi",
        component:ClientproductListComponent
    }
];
 