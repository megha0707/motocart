import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbikedetailComponent } from './bookbikedetail.component';

describe('BookbikedetailComponent', () => {
  let component: BookbikedetailComponent;
  let fixture: ComponentFixture<BookbikedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbikedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbikedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
