import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProveedorComponent } from './crear-proveedor.component';

describe('CrearProveedorComponent', () => {
  let component: CrearProveedorComponent;
  let fixture: ComponentFixture<CrearProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearProveedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
