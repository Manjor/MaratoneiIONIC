import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { DetalhesPage } from '../detalhes/detalhes';

/**
 * Generated class for the ProjetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
  //Inclui o provider dos Filmes = MovieProvider
  providers: [
    MovieProvider
  ]
})
export class ProjetosPage {

  public nome_projeto:string = "Gerenciador de Gastos C#";
  //Cria uma lista de qualquer coisa
  public lista_filmes = new Array<any>();


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private movieProvider: MovieProvider,
     public loadingCtrl: LoadingController
    ) {
  }

  //Criação de Função(Metodo)
  public soma_dois_numeros(): void
  {
    alert(5 + 10);
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

  public soma_parametros(num1:number, num2:number): void
  {
    alert(num1 + num2);
  }

  carregaConteudo()
  {
      const loader = this.loadingCtrl.create({
        content: "Carregando Conteudo",
        duration: 2000
      });
      loader.present();
  }

  
  ionViewDidEnter() {
    //Chama o metodo de pegar Ultimos Filmes
    this.carregaConteudo();
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
