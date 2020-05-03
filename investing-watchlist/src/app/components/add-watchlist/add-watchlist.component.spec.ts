import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWatchlistComponent } from './add-watchlist.component';

describe('AddWatchlistComponent', () => {
  let component: AddWatchlistComponent;
  let fixture: ComponentFixture<AddWatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
