import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-arcoiris',
  templateUrl: 'arcoiris.html',
})
export class ArcoirisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArcoirisPage');
  }

  doCallNumber(){
    this.callNumber.callNumber('335 80 66', true);
  }

}
