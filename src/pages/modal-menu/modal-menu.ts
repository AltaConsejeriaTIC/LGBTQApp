import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { QuienesSomosPage } from '../quienes-somos/quienes-somos';
import { FormularioPage } from '../formulario/formulario';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-modal-menu',
  templateUrl: 'modal-menu.html'
})
export class ModalMenuPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private iab: InAppBrowser) {}

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

  goToPDF() {
  const browser = this.iab.create('http://www.bogotaturismo.gov.co/sites/default/files/guia_ttca_lgbti_2016_ok_aprobada_19_feb.pdf', '_system');
  this.viewCtrl.dismiss();
}

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
