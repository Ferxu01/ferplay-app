import { TestBed } from '@angular/core/testing';

import { VideojuegoResolverService } from './videojuego-resolver.service';

describe('VideojuegoResolverService', () => {
  let service: VideojuegoResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideojuegoResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
