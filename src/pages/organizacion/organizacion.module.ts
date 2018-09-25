import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizacionPage } from './organizacion';

@NgModule({
  declarations: [
    OrganizacionPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizacionPage),
  ],
})
export class OrganizacionPageModule {}
