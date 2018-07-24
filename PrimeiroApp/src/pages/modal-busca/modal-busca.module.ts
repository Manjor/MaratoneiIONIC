import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalBuscaPage } from './modal-busca';

@NgModule({
  declarations: [
    ModalBuscaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalBuscaPage),
  ],
})
export class ModalBuscaPageModule {}
