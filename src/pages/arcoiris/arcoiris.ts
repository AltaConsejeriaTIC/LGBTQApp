import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
    this.callNumber.callNumber('0313358066', true);
  }

}
