import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("Jõudsin Cart componenti");
    this.cartItems = this.cartService.cartItemsInService;
  }

  onRemoveFromCart(cartItem: any) {
    let index = this.cartItems.indexOf(cartItem);
    //this.cartItems.splice(cartItem.length-1,1);
    this.cartItems.splice(index,1);
    //console.log(index);
  }

  onEmptyCart() {
    this.cartItems=[];
  }



}

// ostukorvi kogusumma forEach abil
//js forEach sum object values





//onEmptyCart() funktsioon peab olem TS-s
//jälgige, et oleks loogeliste sulgude sees
//jälgige, et ei läheks mõne teise funktsiooni sisse
//() {} tavalised sulud ja loogelised sulud
//loogeliste sulgude sisse vaadake, mis javascriptis tühjendamiseks kasutasime 

// let on lokaalne muutuja, mis on nähtav tema loogeliste sulgude sees
//this. ehk ülemine klassimuutuja on kasutatav HTML-is ja mitmes funktsioonis
// let teeb uue väärtuse, this. kasutav olemasolevat muutujat klassis