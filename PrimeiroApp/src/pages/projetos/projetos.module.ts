import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetosPage } from './projetos';

@NgModule({
  declarations: [
    ProjetosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetosPage),
  ],
})
export class ProjetosPageModule {}
