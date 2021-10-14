import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesInService =["collectibles", "comics", "coins"];

  constructor() { }
}
