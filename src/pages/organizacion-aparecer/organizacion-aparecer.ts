import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-organizacion-aparecer',
  templateUrl: 'organizacion-aparecer.html',
})
export class OrganizacionAparecerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizacionAparecerPage');
  }

}
