import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuienesSomosPage } from '../quienes-somos/quienes-somos';
import { FormularioPage } from '../formulario/formulario';

/**
 * Generated class for the ModalMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-menu',
  templateUrl: 'modal-menu.html',
})
export class ModalMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMenuPage');
  }

  goToQuienesSomos() {
    this.navCtrl.push(QuienesSomosPage);
  }

  goToFormulario() {
    this.navCtrl.push(FormularioPage);
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }

}
