import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedformComponent } from './appliedform.component';

describe('AppliedformComponent', () => {
  let component: AppliedformComponent;
  let fixture: ComponentFixture<AppliedformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
