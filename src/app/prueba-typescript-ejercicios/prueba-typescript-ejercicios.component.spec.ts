import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaTypescriptEjerciciosComponent } from './prueba-typescript-ejercicios.component';

describe('PruebaTypescriptEjerciciosComponent', () => {
  let component: PruebaTypescriptEjerciciosComponent;
  let fixture: ComponentFixture<PruebaTypescriptEjerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaTypescriptEjerciciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaTypescriptEjerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
