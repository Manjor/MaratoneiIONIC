import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FilmesPage } from '../filmes/filmes';
import { MovieProvider } from '../../providers/movie/movie';
import { DetalhesPage } from '../detalhes/detalhes';
import { SerieProvider } from '../../providers/serie/serie';
import { SeriesPage } from '../series/series';

/**
 * Generated class for the ApresentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apresentacao',
  templateUrl: 'apresentacao.html',
  providers: [
    MovieProvider,
    SerieProvider
  ]
})
export class ApresentacaoPage {

  public lista_cartaz = new Array<any>();
  public lista_series = new Array<any>();

  constructor(public navCtrl: NavController,
     public navParams: NavParams, menu : MenuController,
     private movieProvider: MovieProvider,
     private serieProvider: SerieProvider
    )
      {
        menu.enable(true);
  }

  ionViewDidLoad() {
    
    this.filmesEmCartaz();
    this.seriesPopulares();
  }
  //Metodo que busca os principais filmes em cartaz da regiao
  filmesEmCartaz()
  {
    this.movieProvider.pegaCartaz().subscribe(
      data =>{
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        this.lista_cartaz = resultado.results;
      },
      error =>{
        console.log(error);
      }
    )
  }

  //Metodo que busca as series mais populares
  seriesPopulares()
  {
    this.serieProvider.pegaSeriesPopulares().subscribe(
      data=> {
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        var i;
        for(i = 0; i <3; i++)
        {
          this.lista_series.push(resultado.results[i])
        }
        console.log(resultado);
      },
      error =>{
        console.log(error);
      }
    )

  }
  //Metodo que redireciona para a pagina com Abas
  irTabsPage()
  {
    this.navCtrl.push(TabsPage)

  }
  irSeries()
  {
    this.navCtrl.push(SeriesPage)
  }
  irFilmes()
  {
    this.navCtrl.push(FilmesPage)
  }
  //Metodo que redireciona para a pagina de Detalhes
  irDetalhes(filme)
  {
    console.log(filme);
    
    this.navCtrl.push(DetalhesPage,{
      id: filme.id
    });
    console.log(filme.id);
    
  }
}
