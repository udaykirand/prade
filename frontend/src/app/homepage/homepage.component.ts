import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
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
    private productService: ProductService,
    public dialog: MdDialog
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

  openDialog(): void {
    let dialogRef = this.dialog.open(GetQuoteDialog, {
      width: '250px'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}


@Component({
  selector: 'get-quote-dialog',
  templateUrl: 'get-quote-dialog.html',
})
export class GetQuoteDialog {

  constructor(
    public dialogRef: MdDialogRef<GetQuoteDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}