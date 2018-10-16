import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DetailContentService } from '../../services/detail-content.service';

import {} from '@types/googlemaps';

declare var google;

@Component({
  selector: 'page-content-detail',
  templateUrl: 'content-detail.html'
})

export class ContentDetailPage {
  title: string;
  typeContent: string = "evento";
  map: any;
  hideMapNow: boolean;
  lat: any;
  lng: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private detailService: DetailContentService, private platform: Platform, public geolocation: Geolocation) {
    this.typeContent = this.detailService.getContent();
    if (this.typeContent === 'evento') {
      this.title = 'EVENTOS EN BOGOTÁ';
    } else {
      this.title = 'NOTICIAS';
    }
  }

  ionViewDidLoad() {
    this.hideMapInNews();
    this.getPosition();
  }

  initializeMap() {

        let locationOptions = {timeout: 20000, enableHighAccuracy: true};

        navigator.geolocation.getCurrentPosition(

            (position) => {

                let options = {
                  center: new google.maps.LatLng(this.lat, this.lng),
                  zoom: 16,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                }

                this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
            },

            (error) => {
                console.log(error);
            }, locationOptions
        );
    }

    getPosition(): any {
      this.geolocation.getCurrentPosition().then((res) => {
        this.lat= res.coords.latitude;
        this.lng= res.coords.longitude;
        this.initializeMap();
      }).catch((error) => {
          // Load the map even if we fail
          this.loadMapFallback();
          console.log(error);
      });
  }


  loadMapFallback() {
      let mapEle: HTMLElement = document.getElementById('map');

      this.map = new google.maps.Map(mapEle, {
          zoom: 12
      });
  }

  hideMapInNews(){
    if(this.typeContent == "noticia")
    {
     document.getElementById('mapa').style.display = 'none';
    }
    else
    {
      document.getElementById('mapa').style.display = 'block';
    }
  }

}
