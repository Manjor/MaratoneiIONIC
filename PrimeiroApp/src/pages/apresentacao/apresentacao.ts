import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FilmesPage } from '../filmes/filmes';
import { MovieProvider } from '../../providers/movie/movie';
import { DetalhesPage } from '../detalhes/detalhes';

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
    MovieProvider
  ]
})
export class ApresentacaoPage {

  public lista_cartaz = new Array<any>();

  constructor(public navCtrl: NavController,
     public navParams: NavParams, menu : MenuController,
     private movieProvider: MovieProvider
    )
      {
        menu.enable(true);
  }

  ionViewDidEnter() {
    
    this.movieProvider.pegaUltimosFilmes().subscribe(
      data =>{
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        this.lista_cartaz = resultado.results;
        console.log(resultado);
      },
      error => {
        console.log(error);
      }
    )
  }

  //Metodo que redireciona para a pagina com Abas
  irTabsPage()
  {
    this.navCtrl.push(TabsPage)

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
