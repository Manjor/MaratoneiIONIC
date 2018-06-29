import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesSeriePage } from './detalhes-serie';

@NgModule({
  declarations: [
    DetalhesSeriePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesSeriePage),
  ],
})
export class DetalhesSeriePageModule {}
