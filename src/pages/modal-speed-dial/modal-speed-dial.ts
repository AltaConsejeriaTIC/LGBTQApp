import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-speed-dial',
  templateUrl: 'modal-speed-dial.html'
})
export class ModalSpeedDialPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSpeedDialPage');
  }

  goToQuienesSomos() {
    // this.navCtrl.push(QuienesSomosPage);
  }

  goToFormulario() {
    // this.navCtrl.push(FormularioPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
