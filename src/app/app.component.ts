import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwuskxbi9BjKEpAyJipaQRMxbfPg5BJAs",
  authDomain: "webshop-671d2.firebaseapp.com",
  projectId: "webshop-671d2",
  storageBucket: "webshop-671d2.appspot.com",
  messagingSenderId: "683855525085",
  appId: "1:683855525085:web:95ba3cfdbeec63ce1e1734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
}
}
