import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlianzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-alianza',
  templateUrl: 'alianza.html',
})
export class AlianzaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  backButtonClick() {
    console.log('// dos omething')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlianzaPage');
  }

}
