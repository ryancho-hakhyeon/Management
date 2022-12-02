import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReapplyComponent } from './reapply.component';

describe('ReapplyComponent', () => {
  let component: ReapplyComponent;
  let fixture: ComponentFixture<ReapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReapplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
