import { TestBed } from '@angular/core/testing';

import { LibrosProviderService } from './libros-provider.service';

describe('LibrosProviderService', () => {
  let service: LibrosProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
