import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentDetailPage } from '../content-detail/content-detail';
import { DetailContentService } from '../../services/detail-content.service';

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
  public title: string = 'EVENTOS Y NOTICIAS';

  constructor(public navCtrl: NavController, public navParams: NavParams, private detailService: DetailContentService) {
    this.detailService.setEvento(this.evento);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

  changeSectionEvents() {
    this.evento = true;
    this.noticia = false;
    this.title = 'EVENTOS Y NOTICIAS';
    this.detailService.setEvento(true);
  }
  changeSectionNews() {
    this.evento = false;
    this.noticia = true;
    this.title = 'ACTUALIDAD BOGOTÁ';
    this.detailService.setEvento(false);
  }
  goToDetails() {
    this.navCtrl.push(ContentDetailPage);
  }
}
