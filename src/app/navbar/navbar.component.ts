import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sumOfCart = 0;

 // MUUTUJA = "";

  constructor(private translate: TranslateService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItemsInService = JSON.parse(localStorage.getItem("cart") as string) || [];
    this.sumOfCart = 0;
    this.cartService.cartItemsInService.forEach(cartItem=>this.sumOfCart = this.sumOfCart + cartItem.price);

    console.log("Jõudsin navbar componenti!");

    this.cartService.cartItemsChanged.subscribe(() => {
      //console.log("Ostukorvi sisu muudeti");
      this.sumOfCart = 0;
      this.cartService.cartItemsInService.forEach(cartItem=>this.sumOfCart = this.sumOfCart + cartItem.price);
    
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}

}
