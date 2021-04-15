import { TestBed } from '@angular/core/testing';

import { PerfilResolverService } from './perfil-resolver.service';

describe('PerfilResolverService', () => {
  let service: PerfilResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
