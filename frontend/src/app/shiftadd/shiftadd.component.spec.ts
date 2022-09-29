import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftaddComponent } from './shiftadd.component';

describe('ShiftaddComponent', () => {
  let component: ShiftaddComponent;
  let fixture: ComponentFixture<ShiftaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
