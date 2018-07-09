import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the SerieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SerieProvider {

  private baseApi = "https://api.themoviedb.org/3/tv/"
  private chaveApi = ""
  private idioma = "&language=pt-BR"

  constructor(public http: Http) {
  }
  pegaSeriesPopulares(){
    return this.http.get(this.baseApi + "popular?api_key=" + this.chaveApi + this.idioma)
  }

  pegaDetalhes(serieid){
    return this.http.get(this.baseApi + `${serieid}?api_key=` + this.chaveApi + this.idioma)
  }
  pegaTemporada(serieid,numTemporada)
  {
    return this.http.get(this.baseApi + `${serieid}/season/${numTemporada}?api_key=` + this.chaveApi + this.idioma)
  }

}
