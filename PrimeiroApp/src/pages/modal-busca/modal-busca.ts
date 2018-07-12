import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { DetalhesPage } from '../detalhes/detalhes';
import { ApresentacaoPage } from '../apresentacao/apresentacao';

/**
 * Generated class for the ModalBuscaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-busca',
  templateUrl: 'modal-busca.html',
})
export class ModalBuscaPage {

  public texto: string;
  public lista_busca = new Array<any>();
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private movieProvider: MovieProvider,
     public viewCtrl: ViewController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalBuscaPage');
  }



  buscaFilme(texto : string)
  {
    this.movieProvider.buscar(texto).subscribe(
      data =>{
        const response = (data as any);
        const resultado = JSON.parse(response._body);
        this.lista_busca = resultado.results;
        console.log(resultado);
      },
      error => {
        console.log(error);
      }
    )
  }
  
  recebeDado(texto: string)
  {
    this.texto = texto;
    this.buscaFilme(this.texto);
    console.log(this.texto);
  }

  imprime(){
    console.log(this.texto)
  }
  irDetalhes(filme)
  {
    console.log(filme);
    
    this.navCtrl.push(DetalhesPage,{
      id: filme.id
    });
    console.log(filme.id);
    
  }
  voltar()
  {
    this.viewCtrl.dismiss();
  }







}
