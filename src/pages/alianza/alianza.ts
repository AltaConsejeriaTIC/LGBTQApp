import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlianzasAliadoPage } from '../alianzas-aliado/alianzas-aliado';
import { AlianzasDetailPage } from '../alianzas-detail/alianzas-detail';
import { RedPage } from '../red/red';

@Component({
  selector: 'page-alianza',
  templateUrl: 'alianza.html'
})
export class AlianzaPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  backButtonClick() {
    console.log('// dos omething');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlianzaPage');
  }

  goToRed(){
    this.navCtrl.push(RedPage);
  }

  goToSerAliado(){
    this.navCtrl.push(AlianzasAliadoPage);
  }

  goToDetail(){
    this.navCtrl.push(AlianzasDetailPage);
  }


}
