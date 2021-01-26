import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Para almacenar los items devueltos por el servicio
  products: Array<any> = [];

  //Para almacenar la pagina actual
  activePage: number = 0;
  
  constructor(public productService: ProductService) { }
  /**
   *
   * Se ejecuta siempre que se cargue este componente
   * @memberof HomeComponent
   */
  ngOnInit(): void {
    this.getProducts()
  }

  /**
   *
   * Metodo que consume el servicio y trae los Items paginados
   * @memberof HomeComponent
   */
  getProducts() {
    this.productService.getProducts()
      .subscribe((data: any) => {
        this.products = data;
      })
  }
  /**
   *
   * Metodo para ir a la pagina posterior a la actualmente seleccionada
   * @memberof HomeComponent
   */
  nextPage() {
    this.activePage = this.activePage + 1;
  }
  /**
   *
   * Metodo para ir a la pagina anterior a la actualmente seleccionada
   * @memberof HomeComponent
   */
  previousPage() {
    this.activePage = this.activePage - 1;
  }
  /**
   *
   * Metodo para ir a la pagina recibida por parametro
   * @param {number} page
   * @memberof HomeComponent
   */
  goToPage(page: number) {
    this.activePage = page;
  }

}
