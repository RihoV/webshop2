import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  id!: any;
  item!: any;
  editItemForm!: FormGroup;

  //ühendus ActivatedRoute Angular classiga
  //ngOnInit sees täidan this.id ja saan kätte id 
  //ühendus ItemService classiga
  //ngOnInit sees otsin üles sobiva eseme selle id alusel

  constructor(private route: ActivatedRoute,
              private itemService: ItemService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("itemId");
    this.item = this.itemService.itemsInService.find(item => item.title == this.id);

    this.editItemForm = new FormGroup({
      title: new FormControl(this.item.title),
      imgSrc: new FormControl(this.item.imgSrc),
      price: new FormControl(this.item.price),
      category: new FormControl(this.item.category),
      isActive: new FormControl(this.item.isActive),
    });
  }

  onSubmit()  {
    if(this.editItemForm.valid) {
      let index = this.itemService.itemsInService.findIndex(item => item.title == this.id);

      this.itemService.itemsInService[index] = this.editItemForm.value;
    }
  }

}
