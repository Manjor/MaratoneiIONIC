import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeriesPageModule } from './series.module';
import { SerieProvider } from '../../providers/serie/serie';
import { DetalhesSeriePage } from '../detalhes-serie/detalhes-serie';

/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
  providers: [
    SerieProvider
  ]
})
export class SeriesPage {


  public lista_series = new Array<any>();

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private serieProvider: SerieProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriesPage');
    this.pegaUltimasSeries();
  }
  pegaUltimasSeries()
  {
    this.serieProvider.pegaSeriesPopulares().subscribe(
      data =>{
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        this.lista_series = resultado.results;
        console.log(resultado);
      },
      error =>{
        console.log(error);
      }
    )
  }
  irDetalhes(serie)
  {
    this.navCtrl.push(DetalhesSeriePage,{
      id: serie.id
    });
  }
}
