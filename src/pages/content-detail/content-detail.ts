import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetailContentService } from '../../services/detail-content.service';

import {} from '@types/googlemaps';


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
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private detailService: DetailContentService) {
    this.typeContent = this.detailService.getContent();
    if (this.typeContent === 'evento') {
      this.title = 'EVENTOS EN BOGOTÁ';
    } else {
      this.title = 'NOTICIAS';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentDetailPage');
    this.initializeMap();
  }

  initializeMap() {

  let locationOptions = {timeout: 20000, enableHighAccuracy: true};

    navigator.geolocation.getCurrentPosition(

        (position) => {

            let options = {

              center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(document.getElementById("map"), options);
        },

        (error) => {
            console.log(error);
        }, locationOptions
    );

    }


}
