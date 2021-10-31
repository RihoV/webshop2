import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {
  kasutajad: any[] =[];

  constructor(private kasutajaService: UserService) { }

  ngOnInit(): void {
    this.kasutajad = this.kasutajaService.kasutajad;
  }

  kustuta(kasutaja: any){
    let j2rjekorranumber = this.kasutajaService.kasutajad.indexOf(kasutaja);
    this.kasutajaService.kasutajad.splice(j2rjekorranumber,1);
  };

}
