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

  private baseApi = "https://api.themoviedb.org/3"
  private chaveApi = ""


  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  pegaUltimosFilmes()
  {
    return this.http.get(this.baseApi + "/movie/popular?api_key=" + this.chaveApi +"&language=pt-BR")
  }

  pegaDetalhes(filmeid)
  {
    return this.http.get(this.baseApi + `/movie/${filmeid}?api_key=` + this.chaveApi +"&language=pt-BR" )
  }

  
}
