import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalMenuPage } from './modal-menu';

@NgModule({
  declarations: [
    ModalMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalMenuPage),
  ],
})
export class ModalMenuPageModule {}
