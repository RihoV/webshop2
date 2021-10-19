import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Item[] = [];
  sumOfCart = 0;

  // Service-i Componenti lisamine, et saaks andmeid Componentide vahe liigutada
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log("Jõudsin Cart componenti");
    this.cartItems = this.cartService.cartItemsInService;
                   // = this. -- näitab, mis kõik on klassi sees
                   // = this.cartService -- näita, kõik, mis on cartService sees
                   // = this.cartService.cartItemsInService
                   // (kui olen 2 korda vajutanud esimesele esemele .push() )
                   // = [{title: "Ese1"},{price: "123"}, ..., {title: "Ese1"},{price: "123"}, ...]

   this.sumOfCart = 0;
   this.cartItems.forEach(cartItem=>this.sumOfCart = this.sumOfCart + cartItem.price);
  }

  onEmptyCart() {
    this.cartService.cartItemsInService=[];
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    //a) [{title: "Ese1"},{price: "123"}, ..., {title: "Ese1"},{price: "12"}, {title: "Ese3"},{price: "100"}]  .forEach()
    //b) 1. this.cartItems.forEach({title: "Ese1"},{price: "123"},...) =>{});
    //b) 2. this.cartItems.forEach({title: "Ese2"},{price: "12"},...) =>{});
    //b) 3. this.cartItems.forEach({title: "Ese3"},{price: "100"},...) =>{});
    //c) 1. this.cartItems.forEach(cartItem=> = 123 = 0 + 123
    //c) 2. this.cartItems.forEach(cartItem=> = 135 = 123 + 12
    //c) 3. this.cartItems.forEach(cartItem=> = 235 = 135 + 100
    this.cartItems.forEach(cartItem=>this.sumOfCart = this.sumOfCart + cartItem.price);
    // let muutuja of array
    //siin div sees kuvatakse nii mitu korda
    //array.forEach(muutuja=>)
    //minnakse nii mitu korda funktsiooni tegema,
    //  nii mitu korda, kui on elemente massiivis
  }

  onRemoveFromCart(cartItem: Item) {
    let index = this.cartService.cartItemsInService.indexOf(cartItem);
    this.cartService.cartItemsInService.splice(index,1);
    this.cartItems = this.cartService.cartItemsInService;
    //console.log(index);

    this.sumOfCart = 0;
    this.cartItems.forEach(cartItem=>this.sumOfCart = this.sumOfCart + cartItem.price);
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