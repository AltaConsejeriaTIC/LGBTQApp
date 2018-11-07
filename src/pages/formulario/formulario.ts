import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormCensoPage } from '../form-censo/form-censo';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html'
})
export class FormularioPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  openForm(){
      this.navCtrl.push(FormCensoPage);
  }
}
