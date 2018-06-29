import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SerieProvider } from '../../providers/serie/serie';

/**
 * Generated class for the DetalhesSeriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-serie',
  templateUrl: 'detalhes-serie.html',
  providers: [
    SerieProvider
  ]
})
export class DetalhesSeriePage {

  public idSerie;
  public serie;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private serieProvider: SerieProvider
    ) {
  }

  ionViewDidLoad() {
    this.recebeDetalhes();
  }

  //Metodo que insere busca os detalhes do filme
  recebeDetalhes()
  {
    this.idSerie = this.navParams.get("id");
    this.serieProvider.pegaDetalhes(this.idSerie).subscribe(
      data=>{
        let resultado = (data as any)._body;
        this.serie = JSON.parse(resultado);
        console.log(this.idSerie)
      },
      error=>{
        console.log(error);
      });
  }
}
