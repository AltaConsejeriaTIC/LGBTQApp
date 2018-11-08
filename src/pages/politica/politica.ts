import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {ObjetivoPage} from '../objetivo/objetivo';
import {CoordinaPage} from '../coordina/coordina';
import {LogrosPage} from '../logros/logros';

@Component({
  selector: 'page-politica',
  templateUrl: 'politica.html',
})
export class PoliticaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliticaPage');
  }

  goToObjetivo(){
    this.navCtrl.push(ObjetivoPage);
  }

  goToCoordina(){
    this.navCtrl.push(CoordinaPage);
  }

  goToLogros(){
    this.navCtrl.push(LogrosPage);
  }

}
