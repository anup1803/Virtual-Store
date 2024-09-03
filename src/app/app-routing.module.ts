import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductFormComponent } from './Components/product-form/product-form.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ProductUpdateComponent } from './Components/product-update/product-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'product',pathMatch: 'full'},

  {
    path: 'product',
    children: [
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'product-details',
        component: ProductDetailsComponent,
      },
      {
        path: ':id',
        component: ProductComponent,
      },
     
      
      {
        path: ':search',
        component: ProductComponent,
      },
    ],
  },

  {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: 'profile',
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'product-form',
        component: ProductFormComponent,
      },
    ],
  },
  {path:'profile/profile-form/:id/update', component:ProductUpdateComponent},
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
