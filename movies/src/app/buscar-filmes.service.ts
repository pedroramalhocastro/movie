import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filmes } from './filmes.model';

@Injectable({
  providedIn: 'root'
})
export class BuscarFilmesService {

  API_Url = 'https://api.themoviedb.org/3';
  API_key = '40087035756ca61fd208b388d013302f';


  constructor(private htpp: HttpClient) { }

  filmes(): Observable<Filmes> {
    return this.htpp.get<Filmes>(`${this.API_Url}/discover/movie?sort_by=popularity.desc&api_key=${this.API_key}&language=pt-BR`);
  }

}
