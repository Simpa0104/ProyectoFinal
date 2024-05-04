import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuProveedoresComponent } from './cu-proveedores.component';

describe('CuProveedoresComponent', () => {
  let component: CuProveedoresComponent;
  let fixture: ComponentFixture<CuProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuProveedoresComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CuProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
