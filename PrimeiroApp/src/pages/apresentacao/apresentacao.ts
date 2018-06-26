import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FilmesPage } from '../filmes/filmes';

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
})
export class ApresentacaoPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams, menu : MenuController)
      {
        menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApresentacaoPage');
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
}
