import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcardetailComponent } from './bookcardetail.component';

describe('BookcardetailComponent', () => {
  let component: BookcardetailComponent;
  let fixture: ComponentFixture<BookcardetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookcardetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcardetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
