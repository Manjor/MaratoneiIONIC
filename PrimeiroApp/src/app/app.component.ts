import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ApresentacaoPage } from '../pages/apresentacao/apresentacao';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { MapaCinemasPage } from '../pages/mapa-cinemas/mapa-cinemas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //Define a pagina que será iniciado com o Sistema
  rootPage:any ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      this.rootPage = MapaCinemasPage;
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  

  

}
