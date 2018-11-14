import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-purpura',
  templateUrl: 'purpura.html',
})
export class PurpuraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurpuraPage');
  }

  doCallNumber(){
    this.callNumber.callNumber('018000112137', true);
  }

}
