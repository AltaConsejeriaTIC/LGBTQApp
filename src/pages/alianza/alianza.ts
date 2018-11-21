import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlianzasAliadoPage } from '../alianzas-aliado/alianzas-aliado';

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

  goToSerAliado(){
    this.navCtrl.push(AlianzasAliadoPage);
  }
}
