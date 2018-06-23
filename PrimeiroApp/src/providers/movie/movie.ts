import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApi = "https://api.themoviedb.org/3/movie/"
  private chaveApi = "f814673a004bcd3dfd0e837cf1a0b020"
  private idioma = "&language=pt-BR"

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  //Pega os Filmes mais populares
  pegaUltimosFilmes()
  {
    
    return this.http.get(this.baseApi + "popular?api_key=" + this.chaveApi + this.idioma)
    
  }

  //Metodo que busca os detalhes do filme na API de filmes
  pegaDetalhes(filmeid)
  {
    
    return this.http.get(this.baseApi + `${filmeid}?api_key=` + this.chaveApi + this.idioma)

  }

  //Metodo que irá buscar os principais reviews daquele filme
  pegaReviews(filmeid)
  {
    return this.http.get(this.baseApi + `${filmeid}/reviews?api_key=` + this.chaveApi + this.idioma )
  }
  
  pegaVideo(filmeid)
  {
    return this.http.get(this.baseApi + `${filmeid}/videos?api_key=` + this.chaveApi + this.idioma )
  }
}
