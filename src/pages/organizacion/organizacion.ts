import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrganizacionAparecerPage } from '../organizacion-aparecer/organizacion-aparecer';
import { OrganizacionDetailPage } from '../organizacion-detail/organizacion-detail';

/**
 * Generated class for the OrganizacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-organizacion',
  templateUrl: 'organizacion.html'
})
export class OrganizacionPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizacionPage');
  }
  goToAparecer(){
    this.navCtrl.push(OrganizacionAparecerPage);
  }

  goToDetail(){
    this.navCtrl.push(OrganizacionDetailPage);
  }
}
