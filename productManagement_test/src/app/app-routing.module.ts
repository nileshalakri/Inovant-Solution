import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

const routes: Routes = [
  {
    path:'add',
    component:AddproductComponent
  },
  {
    path:'view',
    component:ViewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
