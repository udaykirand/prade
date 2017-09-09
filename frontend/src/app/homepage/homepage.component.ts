import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/service";


export interface Image {
  title: string;
  url: string;
}


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products: any;
  public myInterval: number = 1500;
  public slides: any[] = [];
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;
  constructor(
    private productService: ProductService
  ) { 
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  public addSlide(): void {
    this.slides.push({
      image: `assets/image/${ this.slides.length % 8 + 1 }.jpg`
    });
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data.data;
      console.log(this.products.length);
    });
  }

  productDetails(id) {
    console.log(id);
  }

}
