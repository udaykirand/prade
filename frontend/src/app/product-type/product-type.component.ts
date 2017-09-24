import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from '../service/';
import { ConfirmDialogService } from '../dialog/confirm-dialog.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  public slides: any[] = [];
  public products: any[] = [];
  private type: string;
  private metal: string;
  public myInterval: number = 4500;
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;
  public message: string;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private ConfirmDialogService: ConfirmDialogService) {
    this.route.params.subscribe( params => {
      if (params['type'] && params['metal']) { 
        this.type = params['type'];
        this.metal = params['metal'];
      } else {
        // Display toast
      }
    });
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
      this.productService.getProductByType(this.type, this.metal).subscribe(data => {
      this.products = data.data;
    });
    if(this.products.length == 0) {
      this.message = "No products found";
    }
  }

  openGetQuoteModal(productId): void {
    this.ConfirmDialogService.showModal({
      title: 'Thank you for showing intrest!',
      message: 'Please enter your email address or phone number. We will contact you shortly.',
      confirmText: 'Hells YEAH!',
      denyText: 'Hells to the NAH!',
      productId: productId
    }, '450px').subscribe(result => {
      // Left blank
    });
  }

}
