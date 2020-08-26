import { TestBed } from '@angular/core/testing';

import { PokemoneService } from './pokemone.service';

describe('PokemoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemoneService = TestBed.get(PokemoneService);
    expect(service).toBeTruthy();
  });
});
