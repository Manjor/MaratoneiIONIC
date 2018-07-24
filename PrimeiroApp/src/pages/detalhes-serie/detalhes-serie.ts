import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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


  segmento: String ="Sobre"
  temp : String = "temps"


  public idSerie;
  public serie;
  public temporada;
  public lista_episodios = new Array<any>();

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private serieProvider: SerieProvider,
     private loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    this.recebeDetalhes();
  }

  carregaConteudo(duracao)
  {
      const loader = this.loadingCtrl.create({
        content: "Carregando Conteudo",
        duration: duracao
      });
      loader.present();
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

  detalhesTemporada(idTemporada)
  {

    this.carregaConteudo(500);
    this.idSerie = this.navParams.get("id");
    this.serieProvider.pegaTemporada(this.idSerie,idTemporada).subscribe(
      data =>{
        let resultado = (data as any)._body;
        this.temporada = JSON.parse(resultado);
        console.log(resultado);
      },
      error =>{
        console.log(error);
      }
    )
  }



}
