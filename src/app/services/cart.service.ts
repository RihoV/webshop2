import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsInService: Item[] = [];
  cartItemsChanged = new Subject();

  constructor() { }
}
