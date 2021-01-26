import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products : Array<any> = [];
  activePage : number = 0;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts()
      .subscribe((data:any)=>{
        this.products = data;
      })
  }

  nextPage(){
    this.activePage = this.activePage + 1;
  }

  previousPage(){
    this.activePage = this.activePage - 1;
  }

  goToPage(page:number){
    this.activePage = page;
  }

}
