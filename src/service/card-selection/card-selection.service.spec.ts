import { TestBed } from '@angular/core/testing';

import { cardSelectionService } from './card-selection.service';

describe('cardSelectionService', () => {
  let service: cardSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cardSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
