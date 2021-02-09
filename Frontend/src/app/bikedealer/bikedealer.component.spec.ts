import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikedealerComponent } from './bikedealer.component';

describe('BikedealerComponent', () => {
  let component: BikedealerComponent;
  let fixture: ComponentFixture<BikedealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikedealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikedealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
