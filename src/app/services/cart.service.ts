import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsInService: any[] = [];

  constructor() { }
}
