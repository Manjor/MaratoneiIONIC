import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { Jsonp } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { SerieProvider } from '../../providers/serie/serie';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
  providers: [
    MovieProvider
  ]
})
export class DetalhesPage {

  public idFilme;
  
  public filme;
  public fotos;
  public video;
  public urlVideo;
  public urlVideoSegura;

  public lista_videos = new Array<any>();
  public lista_imagens = new Array<any>();
  segmento: String = "Sobre"

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private movieProvider: MovieProvider,
     private sanitizer: DomSanitizer
    ) {
  
  }


  protecaodeVideo(key: string)
  {
    this.urlVideo = 'https://www.youtube.com/embed/' + key;
    this.urlVideoSegura = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);
   
  }
  //Metodo iniciado toda vez que entra na pagina
  ionViewDidEnter() {
    this.recebeDetalhes();
  }
  
  //Metodo que insere busca os detalhes do filme
  recebeDetalhes()
  {
    this.idFilme = this.navParams.get("id");
    this.movieProvider.pegaDetalhes(this.idFilme).subscribe(
      data=>{
        let resultado = (data as any)._body;
        this.filme = JSON.parse(resultado);
      },
      error=>{
        console.log(error);
      });

      this.recebeVideo();
      this.recebeImagens();

  }
  //Metodo que lista os videos referentes ao Filme
  recebeVideo()
  {
    this.movieProvider.pegaVideo(this.idFilme).subscribe(
      data=>{
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        this.lista_videos = resultado.results;
      },
      error => {
        console.log(error);
      }
    )
  }

  recebeImagens()
  {
    this.movieProvider.pegaImagens(this.idFilme).subscribe(
      data =>{
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        this.lista_imagens = resultado.backdrops;
      },
      error =>{
        console.log(error);
      }
    )
  }



}
