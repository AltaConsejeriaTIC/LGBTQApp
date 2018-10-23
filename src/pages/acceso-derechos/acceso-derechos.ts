import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-acceso-derechos',
  templateUrl: 'acceso-derechos.html',
})
export class AccesoDerechosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccesoDerechosPage');
  }

}
