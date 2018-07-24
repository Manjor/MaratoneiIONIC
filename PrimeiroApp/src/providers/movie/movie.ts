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
  private baseApiGenero = "https://api.themoviedb.org/3/genre/"
  private baseBusca = "https://api.themoviedb.org/3/"
  private chaveApi = ""
  private idioma = "&language=pt-BR"
  private busca = "&query=";

  constructor(public http: Http) {
  }

  buscar(busca : string)
  {
    return this.http.get(this.baseBusca + "search/movie?api_key=" + this.chaveApi + "&query=" + busca + this.idioma)
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
  pegaGenero(id)
  {
    return this.http.get(this.baseApiGenero + id + "/movies?api_key=" + this.chaveApi + this.idioma)
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
  pegaImagens(filmeid)
  {
    return this.http.get(this.baseApi + `${filmeid}/images?api_key=` + this.chaveApi + this.idioma)
  }
  //Metodo que irá obter os filmes atuais em cartaz no cinema
  pegaCartaz()
  {
    return this.http.get(this.baseApi + "upcoming?api_key=" + this.chaveApi + this.idioma)
  }
  
}
