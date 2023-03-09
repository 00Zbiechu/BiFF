import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockcompComponent } from './clockcomp.component';

describe('ClockcompComponent', () => {
  let component: ClockcompComponent;
  let fixture: ComponentFixture<ClockcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
