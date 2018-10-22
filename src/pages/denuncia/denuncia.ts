import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {DiscriminacionPage} from '../discriminacion/discriminacion';
import {ArcoirisPage} from '../arcoiris/arcoiris';
import {PurpuraPage} from '../purpura/purpura';

@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html'
})
export class DenunciaPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DenunciaPage');
  }

  goToArcoiris(){
    this.navCtrl.push(ArcoirisPage);
  }

  goToPurpura(){
    this.navCtrl.push(PurpuraPage);
  }

  goToDiscriminacion(){
    this.navCtrl.push(DiscriminacionPage);
  }

}
