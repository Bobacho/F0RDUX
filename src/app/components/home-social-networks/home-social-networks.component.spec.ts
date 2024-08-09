import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSocialNetworksComponent } from './home-social-networks.component';

describe('HomeSocialNetworksComponent', () => {
  let component: HomeSocialNetworksComponent;
  let fixture: ComponentFixture<HomeSocialNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSocialNetworksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSocialNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
