import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ProductService } from "app/service";
import { ConfirmDialogService } from '../dialog/confirm-dialog.service';

declare var $:any;
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
  contact: string;
  constructor(
    private productService: ProductService,
    private ConfirmDialogService: ConfirmDialogService
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
    $(document).ready(function(){
            $("[data-fancybox]").fancybox({
               toolbar         : true,
               buttons         : ['fullScreen', 'close'],
               animationEffect : true,
               arrows          : false,
               clickContent    : false
             });
        });
    this.productService.getAllProducts().subscribe(data => {
      this.products = data.data;
    });   
  }

  openGetQuoteModal(productId, productName): void {
    this.ConfirmDialogService.showModal({
      title: 'Thank you for showing intrest!',
      message: 'Please enter your email address or phone number. We will contact you shortly.',
      confirmText: 'Hells YEAH!',
      denyText: 'Hells to the NAH!',
      productId: productId,
      productName: productName
    }, '450px').subscribe(result => {
      // Left blank
    });
  }
}