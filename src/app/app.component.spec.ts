import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('AppComponent', () => {
  let component : AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


});
