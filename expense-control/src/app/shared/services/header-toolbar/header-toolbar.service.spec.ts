import { TestBed } from '@angular/core/testing';

import { HeaderToolbarService } from './header-toolbar.service';

describe('HeaderToolbarService', () => {
  let service: HeaderToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
