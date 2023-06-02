import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDashBordComponent } from './result-dash-bord.component';

describe('ResultDashBordComponent', () => {
  let component: ResultDashBordComponent;
  let fixture: ComponentFixture<ResultDashBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultDashBordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultDashBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
