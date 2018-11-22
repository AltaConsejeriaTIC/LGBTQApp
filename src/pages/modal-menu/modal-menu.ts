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
    this.navCtrl.push(QuienesSomosPage).catch(err => {
      console.error("Error en goToQuienesSomos", err, err.stack);
    });
    this.viewCtrl.dismiss().catch(err => {
      console.error("Error en goToQuienesSomos", err, err.stack);
    });
  }

  goToFormulario() {
    this.navCtrl.push(FormularioPage).catch(err => {
      console.error("Error en goToFormulario", err, err.stack);
    });
    this.viewCtrl.dismiss().catch(err => {
      console.error("Error en goToFormulario", err, err.stack);
    });
  }

  goToPDF() {
  this.iab.create('http://www.bogotaturismo.gov.co/sites/default/files/guia_ttca_lgbti_2016_ok_aprobada_19_feb.pdf', '_system');
  this.viewCtrl.dismiss().catch(err => {
    console.error("Error en goToPDF", err, err.stack);
  });
}

  dismiss() {
    this.viewCtrl.dismiss().catch(err => {
      console.error("Error en dismiss", err, err.stack);
    });
  }



}
