import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { HomeComponent } from './home.component';
import { ProductService } from 'src/app/services/product.service';
import { of } from 'rxjs';
import { PRODUCTS_MOCK } from 'src/app/test/items.mock';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should exist a method called nextPage()', ()=>{
    const method = spyOn(component, 'nextPage').and.callThrough()
    component.nextPage();
    expect(component.activePage).toBe(1)
    expect(method).toHaveBeenCalled()
  })

  it('should exist a method called previousPage()', ()=>{
    const method = spyOn(component, 'previousPage').and.callThrough()
    component.nextPage();
    component.previousPage();
    expect(component.activePage).toBe(0)
    expect(method).toHaveBeenCalled()
  })

  it('should exist a method called goToPage()', ()=>{
    const method = spyOn(component, 'goToPage').and.callThrough()
    component.goToPage(5);
    expect(component.activePage).toBe(5)
    expect(method).toHaveBeenCalled()
  })

  it('should exist a method called getProducts()', ()=>{
    const method = spyOn(component.productService, 'getProducts').and.returnValue(of(PRODUCTS_MOCK))
    component.getProducts();
    component.productService.getProducts()
        .subscribe(data=>{
          expect(component.products.length).toBe(20)
          expect(method).toHaveBeenCalled()
        })
  })

});
