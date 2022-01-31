import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActividadesComponent } from './dashboard-actividades.component';

describe('DashboardActividadesComponent', () => {
  let component: DashboardActividadesComponent;
  let fixture: ComponentFixture<DashboardActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardActividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
