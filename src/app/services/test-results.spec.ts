import { TestBed } from '@angular/core/testing';

import { TestResults } from './test-results';

describe('TestResults', () => {
  let service: TestResults;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestResults);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
