import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/service";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products: any;
  public myInterval: number = 4500;
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
      image: `assets/image/1.jpg`
    });
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data.data;
    });
  }

  productDetails(id) {
    console.log(id);
  }

}
