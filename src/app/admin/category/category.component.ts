import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any[]= [];

  //ühendus categoryService-ga
  constructor(private categoryService: CategoryService) { }

  //võtke categoryServicist categoriesInService ja
  //    pange see this.categories sisse
  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService;
  }

  onDeleteCategory(category: any){
    console.log("Deleted: " + category);

    let index =  this.categoryService.categoriesInService.indexOf(category);
    this.categoryService.categoriesInService.splice(index,1);
    this.categories = this.categoryService.categoriesInService;
  }

  onSubmit(addCategoryForm: NgForm){
  // console.log("Added: " + category);
  this.categoryService.categoriesInService.push(addCategoryForm.value.category);
  this.categories = this.categoryService.categoriesInService;
  }



  //tehkle HTMLis ngFor ja kuvage kõik kategooriad välja
  //valmis on siis, kui lähete kategooria lehele ja
  
}
