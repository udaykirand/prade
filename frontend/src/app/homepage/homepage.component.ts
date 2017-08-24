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
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data.data;
      console.log(this.products.length);
    });
    var IMAGES: Image[] = [
  { "title": "We are covered", "url": "images/covered.jpg" },
  { "title": "Generation Gap", "url": "images/generation.jpg" },
  { "title": "Potter Me", "url": "images/potter.jpg" },
  { "title": "Pre-School Kids", "url": "images/preschool.jpg" },
  { "title": "Young Peter Cech", "url": "images/soccer.jpg" } 
];
  }

}
