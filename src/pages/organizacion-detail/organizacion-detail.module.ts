import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizacionDetailPage } from './organizacion-detail';

@NgModule({
  declarations: [
    OrganizacionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizacionDetailPage),
  ],
})
export class OrganizacionDetailPageModule {}
