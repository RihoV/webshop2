import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { ViewItemsComponent } from './admin/view-items/view-items.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ViewComponent } from './home/view/view.component';
import { CategoryComponent } from './admin/category/category.component';
import { ViewUsersComponent } from './admin/users/view-users/view-users.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { EditUserComponent } from './admin/users/edit-user/edit-user.component';
import { ItemPricePipe } from './pipes/item-price.pipe';
import { ShortenTitlePipe } from './pipes/shorten-title.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './admin/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    AddItemComponent,
    EditItemComponent,
    ViewItemsComponent,
    AdminHomeComponent,
    ViewComponent,
    CategoryComponent,
    ViewUsersComponent,
    AddUserComponent,
    EditUserComponent,
    ItemPricePipe,
    ShortenTitlePipe,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
