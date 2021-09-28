import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any[] = [];

  //erinevate failide ühendus toimub constructor sees
  //private MUUTUJA_NIMI; Fail_Mida_Ühendan
  //Fail_Mida_Ühendan peab olema imporditud, sest
  //  praegune class tahab teada, kus ühendatav fail asub
  //hea tava on panna MUUTUJA_NIMI, mis on ühendatava faili
  //  nimetus väikese tähega

  constructor(private cartService: CartService,
    private itemService: ItemService) { }
    
 
  ngOnInit(): void {
    this.items = this.itemService.itemsInService;

    console.log("Jõudsin Home componenti");
  }

onAddToCart(item: any) {
  console.log(item);
  //console.log(this.items);
  //console.log("Vajutati nuppu!");
  console.log(item.title + " lisati ostukorvi");

  this.cartService.cartItemsInService.push(item);
}
}
