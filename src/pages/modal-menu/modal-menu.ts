import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { QuienesSomosPage } from '../quienes-somos/quienes-somos';
import { FormularioPage } from '../formulario/formulario';


@Component({
  selector: 'page-modal-menu',
  templateUrl: 'modal-menu.html'
})
export class ModalMenuPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMenuPage');
  }

  goToQuienesSomos() {
    this.navCtrl.push(QuienesSomosPage);
    this.viewCtrl.dismiss();
  }

  goToFormulario() {
    this.navCtrl.push(FormularioPage);
    this.viewCtrl.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
