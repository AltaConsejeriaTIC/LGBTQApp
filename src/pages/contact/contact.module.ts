import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
  ],
  providers: [
    SocialSharing
  ]
})
export class ContactPageModule {}
