import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SMS } from '@ionic-native/sms';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
  ],
  providers: [
    SocialSharing,
    SMS
  ]
})
export class ContactPageModule {}
