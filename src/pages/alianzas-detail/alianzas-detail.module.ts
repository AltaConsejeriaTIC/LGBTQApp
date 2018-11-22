import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlianzasDetailPage } from './alianzas-detail';

@NgModule({
  declarations: [
    AlianzasDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AlianzasDetailPage),
  ],
})
export class AlianzasDetailPageModule {}
