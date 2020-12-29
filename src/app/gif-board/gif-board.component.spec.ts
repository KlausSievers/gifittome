import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifBoardComponent } from './gif-board.component';

describe('GifBoardComponent', () => {
  let component: GifBoardComponent;
  let fixture: ComponentFixture<GifBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
