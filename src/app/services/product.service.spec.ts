import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ProductService } from './product.service';
import { PRODUCTS_MOCK } from '../test/items.mock';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
    //Verificamos que despues de cada test no queden solicitudes pendientes
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should exist a method called getProducts()', ()=>{
    service.getProducts()
      .subscribe((data:any)=>{
        expect(data).toBeDefined()
        //expect(data).toEqual(PRODUCTS_MOCK)
      })

      const req = httpMock.expectOne("http://localhost:8080/getItems");
      expect(req.request.method).toBe("GET");
      req.flush(PRODUCTS_MOCK) //Inyectamos el Mock
  })

  
});
