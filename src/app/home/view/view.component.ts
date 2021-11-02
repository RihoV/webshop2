import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id!: string; //hüüumärgiga ei anna koheselt väärtust
  item!: Item; //item!: {title, string}; 1 object
  //items: any[] = [];

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
    //this.id = this.route.snapshot.paramMap.get("itemId");
    this.itemService.getItemFromDatabase().subscribe(itemsFromDb => {
      this.itemService.itemsInService = itemsFromDb;

      let urlID = this.route.snapshot.paramMap.get("itemId");
      if(urlID){
          this.id = urlID;
      }
                      // [{title: "Ese1"},{},{}].find();
  
                      //.find({title: "Ese1"} => item.title == this.id)
                      //.find({title: "Ese2"} => item.title == this.id)
                      //.find({title: "Ese3"} => item.title == this.id)
  
                      //.find({title: "Ese1"} => item.title == "itemId kaudu välja url-st")
                      //.find({title: "Ese2"} => item.title == "itemId kaudu välja url-st")
                      //.find({title: "Ese3"} => item.title == "itemId kaudu välja url-st")
  
      // console.log(this.id);
      //this.item = this.itemService.itemsInService.find(item => item.title == this.id);
  
      let urlFind = this.itemService.itemsInService.find(item => item.title == this.id);
      if(urlFind){
          this.item = urlFind;
      }
      // console.log(this.item);

    });

    }
    
    addToCart(item: Item) {
      	this.cartService.cartItemsInService.push(item);
    }
}
