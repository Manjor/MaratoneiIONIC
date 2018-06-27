import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the FilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
  providers: [
    MovieProvider
  ]
})
export class FilmesPage {

  //Cria uma lista de qualquer coisa
  public lista_filmes = new Array<any>();
  public lista_filme_genero = new Array<any>();
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private movieProvider: MovieProvider,
     public loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmesPage');
  }

  carregaConteudo()
  {
      const loader = this.loadingCtrl.create({
        content: "Carregando Conteudo",
        duration: 500
      });
      loader.present();
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

  listaGeneros(id)
  {
    this.carregaConteudo();
    this.movieProvider.pegaGenero(id).subscribe(
      data =>{
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        this.lista_filmes = resultado.results;
        console.log(resultado);
      },
      error => {
        console.log(error);
      }
    )
  }

  ionViewDidEnter()
  {
    this.carregaConteudo()
    this.movieProvider.pegaUltimosFilmes().subscribe(
      data =>{
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        this.lista_filmes = resultado.results;
        console.log(resultado);
      },
      error => {
        console.log(error);
      }
    )
  }

}
