import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  titleTouched = false;
  categories: string[]= [];

  constructor(private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService;
    this.itemService.getItemFromDatabase().subscribe(itemsFromDb => {
      this.itemService.itemsInService = itemsFromDb;
    });
  }

  onChangeTitle(){
    this.titleTouched = true;
  }

  onSubmit(addItemForm: NgForm) {
    if(addItemForm.valid) {  //if(addItemForm.valid == true)
    console.log(addItemForm.value);
    this.itemService.itemsInService.push(addItemForm.value);
    this.itemService.addItemsToDatabase().subscribe(() => {
      addItemForm.reset();
    });
    }
  // console.log("vajutati");
  }

}

//tüübid (muutuja:TÜÜP)
//category lõpuni lisamisel (kordamine)
// - uus component
// - uus Service. ,os omab endas up-to-date seisu
// - componendis küsin Service-lt uusimat seisu ja samas Componendis
//  saan lisada (push)
// -add-item Component võtab need category'd kasutusele ja näitab
//  neid Dropdownis (select/option)

// tõlked peale -seadistamist, aga mitte palju koodikirjutamist

// vormi valideerimist -dünaamiline kujundus

// not found page

// kordamine URL params osas -URL params on tänane teema