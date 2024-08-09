import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSetComponent } from './cart-set.component';

describe('CartSetComponent', () => {
  let component: CartSetComponent;
  let fixture: ComponentFixture<CartSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
