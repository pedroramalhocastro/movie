import { TestBed } from '@angular/core/testing';

import { BuscarFilmesService } from './buscar-filmes.service';

describe('BuscarFilmesService', () => {
  let service: BuscarFilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarFilmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
