import { parseHostBindings } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

// router-outlet asemele tuleb parempoolne component,
//vastavalt sellele mis on path (url)
// localhost:4200/ järel

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "ostukorv", component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
