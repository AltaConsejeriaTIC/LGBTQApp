import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {
  public evento: boolean = true;
  public noticia: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

  changeSectionEvents() {
    this.evento = true;
    this.noticia = false;
  }
  changeSectionNews() {
    this.evento = false;
    this.noticia = true;
  }
}
