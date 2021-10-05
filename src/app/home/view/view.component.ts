import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id!: any;
  item!: any; //item!: {title, string};
  items: any[] = [];

  // kuvage HTML-is
  //  te ei pea kasutama ngFor-i, sest ta ei ole massiiv, ta on üksib objekt sealt
  // kasutage ngFor sisu väljakuvamiseks

  //home.components.html's
  //view-items.component.html's
  //cart-component.html's

  //seal oleme kasutanud ngFor'i
  //siin pole vajadust

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("itemId");
    // console.log(this.id);
    this.item = this.itemService.itemsInService.find(item => item.title == this.id);
    // console.log(this.item);
    }
    
    addToCart(item: any) {
      	this.cartService.cartItemsInService.push(item);
    }
}
