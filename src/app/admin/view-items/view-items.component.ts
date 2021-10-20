import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.scss']
})
export class ViewItemsComponent implements OnInit {
  items: Item[] = [];

  //itemSevicega teha ühendus
  constructor(private itemService: ItemService) { }

  //täida items itemsInService väärtusega
  ngOnInit(): void {
    this.items = this.itemService.itemsInService;
  }

  onRemoveItem(item: Item){
    // tehtud varem cart.component seest removeFromCart(item: any);
    let index = this.itemService.itemsInService.indexOf(item);
    this.itemService.itemsInService.splice(index,1);
    this.items = this.itemService.itemsInService;
  }

  onAddItemsToDatabase(){
      this.itemService.addItemsToDatabase().subscribe();
  }

}

//home.component.html-st võtta ka html -
//aga mitte küik copy pasteda (ei taha võtta siin lisa ostukorvi nuppu)

// nupp "kustuta ese" - peale klikates kutsub välja TS-s funktsiooni ja 
//saadab kaasa eseme

//TS-i sees võtab  eseme vastu, otsib üles indexi ja
//kustutab itemService seest selle indeksiga eseme