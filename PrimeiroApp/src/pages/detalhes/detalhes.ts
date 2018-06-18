import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { Jsonp } from '@angular/http';

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
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private movieProvider: MovieProvider
    ) {
      
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

  }



}
