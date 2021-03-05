import { TestBed } from '@angular/core/testing';

import { EditorialesProviderService } from './editoriales-provider.service';

describe('EditorialesProviderService', () => {
  let service: EditorialesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorialesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
