import { TestBed } from '@angular/core/testing';

import { AutoresProviderService } from './autores-provider.service';

describe('AutoresProviderService', () => {
  let service: AutoresProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoresProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
