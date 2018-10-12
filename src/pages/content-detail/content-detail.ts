import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetailContentService } from '../../services/detail-content.service';

import {} from '@types/googlemaps';

declare var google;

@Component({
  selector: 'page-content-detail',
  templateUrl: 'content-detail.html'
})
export class ContentDetailPage {
  title: string;
  typeContent: string = 'evento';
  map: any;
  hideMapNow: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private detailService: DetailContentService) {
    this.typeContent = this.detailService.getContent();
    if (this.typeContent === 'evento') {
      this.title = 'EVENTOS EN BOGOTÁ';
    } else {
      this.title = 'NOTICIAS';
    }
  }

  ionViewDidLoad() {
    this.initializeMap();
    this.hideMapInNews();
  }

  initializeMap() {
    let locationOptions = { timeout: 20000, enableHighAccuracy: true };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        let options = {
          center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(document.getElementById('map_canvas'), options);
      },

      (error) => {
        console.log(error);
      },
      locationOptions
    );
  }

  hideMapInNews() {
    if (this.typeContent == 'noticia') {
      document.getElementById('mapa').style.display = 'none';
    } else {
      document.getElementById('mapa').style.display = 'block';
    }
  }
}
