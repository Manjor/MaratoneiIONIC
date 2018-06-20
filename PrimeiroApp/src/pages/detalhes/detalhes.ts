import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { Jsonp } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

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



  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private movieProvider: MovieProvider,
     private sanitizer: DomSanitizer
    ) {
  
  }


  protecaodeVideo(id : string)
  {

    this.urlVideo = 'https://www.youtube.com/embed/' + id;
    this.urlVideoSegura =
     this.sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);
    console.log(this.urlVideoSegura);
    
  }

  ionViewDidEnter() {
    this.idFilme = this.navParams.get("id");
    console.log("Id do FIlme: " + this.idFilme)
    this.movieProvider.pegaDetalhes(this.idFilme).subscribe(
      data=>{
        let resultado = (data as any)._body;
        this.filme = JSON.parse(resultado);
      },
      error=>{
        console.log(error);
      });
      this.movieProvider.pegaVideo(this.idFilme).subscribe(
        data=>{
          const response = (data as any);
          const resultado = JSON.parse(response._body);
          this.lista_videos = resultado.results;
          console.log(this.lista_videos);
        },
        error => {
          console.log(error);
        }
      )

  }



}
