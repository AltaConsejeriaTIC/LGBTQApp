import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormDenunciaPage } from '../form-denuncia/form-denuncia';

@Component({
  selector: 'page-discriminacion',
  templateUrl: 'discriminacion.html',
})
export class DiscriminacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscriminacionPage');
  }

  goToFormDenuncia(){
    this.navCtrl.push(FormDenunciaPage);
  }

}
