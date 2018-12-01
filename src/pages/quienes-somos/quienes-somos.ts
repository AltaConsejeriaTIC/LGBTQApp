import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the QuienesSomosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quienes-somos',
  templateUrl: 'quienes-somos.html'
})
export class QuienesSomosPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuienesSomosPage');
  }
  goToYoutube() {
    this.iab.create('https://www.youtube.com/channel/UCG8WBCPdvPNduZiHrc2gKNQ', '_system');
  }
  goToTwitter() {
    this.iab.create('https://twitter.com/sepuedeser', '_system');
  }
  goToInstagram() {
    this.iab.create('https://www.instagram.com/sepuedeser/', '_system');
  }
  goToFacebook() {
    this.iab.create('https://www.facebook.com/enbogotasepuedeser/', '_system');
  }
}
