import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmesPage } from './filmes';

@NgModule({
  declarations: [
    FilmesPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmesPage),
  ],
})
export class FilmesPageModule {}
