import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-alianzas-aliado',
  templateUrl: 'alianzas-aliado.html',
})
export class AlianzasAliadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlianzasAliadoPage');
  }

}
