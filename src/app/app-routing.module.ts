import { parseHostBindings } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CarouselComponent } from './admin/carousel/carousel.component';
import { CategoryComponent } from './admin/category/category.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';
import { ViewUsersComponent } from './admin/users/view-users/view-users.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './home/view/view.component';

// router-outlet asemele tuleb parempoolne component,
//vastavalt sellele mis on path (url)
// localhost:4200/ järel

const routes: Routes = [
  // {path: localhost:4200/, component: home.component.html + .css ja .ts}
  { path: "", component: HomeComponent },
  // {path: localhost:4200/ostukorv, component: cart.component.html + .css ja .ts}
  { path: "ostukorv", component: CartComponent },
  // home html külge
  // ="ese/{{item.title}}"
  // { path: "ese/:itemId/:price", component: ViewComponent },

  { path: "ese/:itemId", component: ViewComponent },
  { path: "admin", component: AdminHomeComponent },
  { path: "admin/lisa-ese", component: AddItemComponent },
  { path: "admin/kategooriad", component: CategoryComponent },
  { path: "admin/muuda-ese/:itemId", component: EditItemComponent },
  { path: "admin/esemed", component: ViewItemsComponent },
    //http://localhost:4200/admin/kasutaja/vaata-kasutajaid
  { path: "admin/kasutajad/vaata-kasutajaid", component: ViewUsersComponent },
  { path: "admin/kasutajad/lisa-kasutaja", component: AddUserComponent },
  { path: "admin/kasutajad/muuda-kasutaja", component: EditUserComponent },
  { path: "admin/galerii", component: CarouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
