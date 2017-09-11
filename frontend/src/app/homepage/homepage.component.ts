import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ProductService } from "app/service";
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { ConfirmDialogService } from './confirm-dialog.service';

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
    public dialog: MdDialog,
    private ConfirmDialogService: ConfirmDialogService
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

  openGetQuoteModal(): void {
    this.ConfirmDialogService.showModal({
      title: 'Thank you for showing intrest!',
      message: 'Please enter your email address or phone number. We will contact you shortly.',
      confirmText: 'Hells YEAH!',
      denyText: 'Hells to the NAH!'
    }, '450px').subscribe(result => {
      console.log('ConfrimDialogService closed with response: ' + result);
    });
  }
}