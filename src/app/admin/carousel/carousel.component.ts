import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarouselImage } from 'src/app/models/carousel-image-model';
import { CarouselService } from 'src/app/services/carousel.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  //siia muutuja
  //carouselImages
  carouselImages: CarouselImage[] =[];

  //ühendus servicega
  constructor(private carouselService: CarouselService) { }

  //võta Service seest väärtused ülemisse muutujasse
  ngOnInit(): void {
    this.carouselImages = this.carouselService.carouselImagesInService;
  }

  onRemoveImage(image: CarouselImage){
    let index = this.carouselService.carouselImagesInService.indexOf(image);
    this.carouselService.carouselImagesInService.splice(index, 1);
    // this.carouselImages = this.carouselService.carouselImagesInService;
  }

  onSubmit(addImageForm: NgForm){
    this.carouselService.carouselImagesInService.push(addImageForm.value);

  }
  //view.items.ts ja view.items.html samad asjad

  //tehke htmli ngfor näidates välja kõik 4 välja
  //kustutamise nupp htmli
  //funktsioon mis kustutab Service'st



}
