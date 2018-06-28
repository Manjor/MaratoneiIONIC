import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http"
import { ApresentacaoPage } from '../pages/apresentacao/apresentacao';
import { ApresentacaoPageModule } from '../pages/apresentacao/apresentacao.module';
import { MovieProvider } from '../providers/movie/movie';
import { DetalhesPageModule } from '../pages/detalhes/detalhes.module';
import { FilmesPage } from '../pages/filmes/filmes';
import { FilmesPageModule } from '../pages/filmes/filmes.module';
import { SerieProvider } from '../providers/serie/serie';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Local onde se declara os modules para a aplicação reconhecer as paginas
    ApresentacaoPageModule,
    DetalhesPageModule,
    FilmesPageModule,
    //Inclue o modulo http para Consumo de APIS
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    SerieProvider,
    SerieProvider
  ]
})
export class AppModule {}
