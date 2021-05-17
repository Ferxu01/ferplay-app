import { TestBed } from '@angular/core/testing';

import { InitializeProviderService } from './initialize-provider.service';

describe('InitializeProviderService', () => {
  let service: InitializeProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitializeProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
