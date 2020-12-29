import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitGameStartComponent } from './wait-game-start.component';

describe('WaitGameStartComponent', () => {
  let component: WaitGameStartComponent;
  let fixture: ComponentFixture<WaitGameStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitGameStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitGameStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
