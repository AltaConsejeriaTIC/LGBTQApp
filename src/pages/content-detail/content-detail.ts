import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailContentService } from '../../services/detail-content.service';
/**
 * Generated class for the ContentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-content-detail',
  templateUrl: 'content-detail.html'
})
export class ContentDetailPage {
  title: string;
  typeContent: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private detailService: DetailContentService) {
    this.typeContent = this.detailService.getContent();
    if (this.typeContent === 'evento') {
      this.title = 'EVENTOS EN BOGOTÁ';
    } else {
      this.title = 'NOTICIAS';
    }
  }

  // ionViewDidLoad() {
  //   console.log(this.detailService.getContent());
  // }
}
