import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 // MUUTUJA = "";

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    console.log("Jõudsin navbar componenti!");
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}

}
