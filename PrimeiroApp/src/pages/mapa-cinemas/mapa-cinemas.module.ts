import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaCinemasPage } from './mapa-cinemas';

@NgModule({
  declarations: [
    MapaCinemasPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaCinemasPage),
  ],
})
export class MapaCinemasPageModule {}
