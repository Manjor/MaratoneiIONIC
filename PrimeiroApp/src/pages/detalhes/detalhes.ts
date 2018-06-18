import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class DetalhesPage {

  public lista_filmes = new Array<any>();
  public  idFilme = this.navParams.get('id');
  movieProvider: any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams
    ) {
      
      console.log(this.idFilme);
  }

  ionViewDidLoad() {
    //Chama o metodo de pegar Ultimos Filmes
    this.movieProvider.pegaDetalhes(this.idFilme).subscribe(
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
