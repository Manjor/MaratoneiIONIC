import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ModalController, ActionSheetController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FilmesPage } from '../filmes/filmes';
import { MovieProvider } from '../../providers/movie/movie';
import { DetalhesPage } from '../detalhes/detalhes';
import { SerieProvider } from '../../providers/serie/serie';
import { SeriesPage } from '../series/series';
import { removeArrayItem } from 'ionic-angular/umd/util/util';
import { DetalhesSeriePage } from '../detalhes-serie/detalhes-serie';
import { LoginPage } from '../login/login';
import { ModalBuscaPage } from '../modal-busca/modal-busca';
import { MapaCinemasPage } from '../mapa-cinemas/mapa-cinemas';

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

  lista_cartaz = new Array<any>();
  public lista_series = new Array<any>();
  public lista_filmes = new Array<any>();
  filmes: string = "Filmes";
  categoria: string = "Categorias";

  constructor(public navCtrl: NavController,
     public navParams: NavParams, menu : MenuController,
     private movieProvider: MovieProvider,
     private serieProvider: SerieProvider,
     public loadingCtrl: LoadingController,
     public modalCtrl: ModalController,
     public actionSheetCtrl: ActionSheetController
    )
      {
        menu.enable(true);
        this.filmesEmCartaz();
        this.seriesPopulares();
  }

  
  
  //Metodo que busca os principais filmes em cartaz da regiao
  filmesEmCartaz()
  {
    this.carregaConteudo(500);
    this.movieProvider.pegaCartaz().subscribe(
      data =>{
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        var i;
        this.lista_cartaz = [];
        for(i = 0; i < 6; i++)
        {
          this.lista_cartaz.push(resultado.results[i]);
        }

        this.lista_filmes = this.lista_cartaz;
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
        this.lista_series = resultado.results
        console.log(resultado);
      },
      error =>{
        console.log(error);
      }
    )

  }

  irDetalhesSeries(serie)
  {
    this.navCtrl.push(DetalhesSeriePage,{
      id: serie.id
    });
  }
  carregaConteudo(duracao)
  {
      const loader = this.loadingCtrl.create({
        content: "Carregando Conteudo",
        duration: duracao
      });
      loader.present();
  }

  filmePopulares()
  {
    this.carregaConteudo(500)
    this.movieProvider.pegaUltimosFilmes().subscribe(
      data =>{
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        this.lista_filmes = resultado.results;

      },
      error => {
        console.log(error);
      }
    )
  }
  listaGeneros(id)
  {
    this.carregaConteudo(500);
    this.movieProvider.pegaGenero(id).subscribe(
      data =>{
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        this.lista_filmes = resultado.results;
      },
      error => {
        console.log(error);
      }
    )
  }

  abrirResumo(titulo:string,estreia:string,resumo: string,filme)
  {
    const actionSheet = this.actionSheetCtrl.create({
      title: titulo,
      cssClass: 'actionSheetFilmes',
      buttons: [
        {
          text: resumo,
        },{
          text: 'Ver Mais',
          icon: 'information-circle',
          handler: () => {
            this.irDetalhes(filme);
          }
        },{
          text: 'Fechar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar Clicado');
          }
        }
      ]
    });
    actionSheet.present();
  }
  abrirResumoSerie(titulo:string, resumo:string, sessoes:string,serie)
  {
    const actionSheet = this.actionSheetCtrl.create({
      title: titulo,
      cssClass: 'actionSheetFilmes',
      buttons: [
        {
          text: resumo,
        },{
          text: 'Ver Mais',
          icon: 'information-circle',
          handler: () => {
            this.irDetalhesSeries(serie);
          }
        },{
          text: 'Fechar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar Clicado');
          }
        }
      ]
    });
    actionSheet.present();
  }





  abriBusca(){
    const modal = this.modalCtrl.create(ModalBuscaPage);
    modal.present();
  }

  //Metodo que redireciona para a pagina com Abas
  irTabsPage()
  {
    this.navCtrl.push(TabsPage);
  }
  irLogin()
  {
    this.navCtrl.push(LoginPage);
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
  irMapa()
  {
    this.navCtrl.push(MapaCinemasPage);
  }
}
