import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  carouselImagesInService = [
    {url: "https://picsum.photos/id/700/900/500", header: "Header1", text: "Text1", alt: "Alt1"},
    {url: "https://picsum.photos/id/533/900/500", header: "Header2", text: "Text2", alt: "Alt2"},
    {url: "https://picsum.photos/id/807/900/500", header: "Header3", text: "Text3", alt: "Alt3"},
    {url: "https://picsum.photos/id/124/900/500", header: "Header4", text: "Text4", alt: "Alt4"}];  

  constructor() { }
}
