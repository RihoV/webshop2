import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  kasutajad =["Kasutaja1", "Kasutaja2", "Kasutaja3"];

  constructor() { }
}
