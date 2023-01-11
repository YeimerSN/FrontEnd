import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DondeComprarComponent } from './donde-comprar.component';

describe('DondeComprarComponent', () => {
  let component: DondeComprarComponent;
  let fixture: ComponentFixture<DondeComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DondeComprarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DondeComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
