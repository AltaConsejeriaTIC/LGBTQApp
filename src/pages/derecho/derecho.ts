import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {PoliticaPage} from '../politica/politica';
import {PuntosPage} from '../puntos/puntos';
import {AccesoDerechosPage} from '../acceso-derechos/acceso-derechos';

@Component({
  selector: 'page-derecho',
  templateUrl: 'derecho.html'
})
export class DerechoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DerechoPage');
  }

  goToPolitica(){
    this.navCtrl.push(PoliticaPage);
  }

  goToPuntos(){
    this.navCtrl.push(PuntosPage);
  }

  goToAccesoDerechos(){
    this.navCtrl.push(AccesoDerechosPage);
  }
}
