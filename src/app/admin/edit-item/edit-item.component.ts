import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  id!: any;
  item!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
