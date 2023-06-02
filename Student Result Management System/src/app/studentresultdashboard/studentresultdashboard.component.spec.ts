import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentresultdashboardComponent } from './studentresultdashboard.component';

describe('StudentresultdashboardComponent', () => {
  let component: StudentresultdashboardComponent;
  let fixture: ComponentFixture<StudentresultdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentresultdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentresultdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
