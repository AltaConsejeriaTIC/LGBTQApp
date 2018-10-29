import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DetailContentService } from '../../services/detail-content.service';
import { ServerConfig } from '../../../config/server';
import { SocialSharing } from '@ionic-native/social-sharing';
import { EventProvider } from '../../providers/event/event';

import {} from '@types/googlemaps';

declare var google;

@IonicPage({
  name: 'content',
  segment: 'content/:id'
})
@Component({
  selector: 'page-content-detail',
  templateUrl: 'content-detail.html'
})

export class ContentDetailPage {
  title: string;
  params: any = {};
  typeContent: string = "evento";
  map: any;
  hideMapNow: boolean;
  match;
  protected api = ServerConfig.apiEndPoint;
  protected id: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private detailService: DetailContentService,
    public geolocation: Geolocation,
    private socialSharing: SocialSharing,
    private eventService: EventProvider
  ) {
    this.match = this.navParams.get('data');
    this.loadData(this.match);
    this.setTitle();
  }

  ionViewDidLoad() {
    this.hideMapInNews();
    this.initializeMap();
  }

  initializeMap() {
    let options = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    let geocoder = new google.maps.Geocoder();
    this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
    this.geocodeAddress(geocoder, this.map);
  }

  setTitle(){
    if (this.typeContent === 'evento') {
      this.title = 'EVENTOS EN BOGOTÁ';
    } else {
      this.title = 'NOTICIAS';
    }
  }

  loadData(data) {
    if (data){
      this.typeContent = this.detailService.getContent();
      this.id = this.navParams.get('id');
      this.params = this.navParams.get('data');
    }else{
      this.typeContent = 'evento';
      this.id = parseInt(this.navParams.get('id'));
      this.eventService.getEvent(this.api, this.id).subscribe(
        (response) => this.params = response,
        (error) => console.log(error)
      );
    }
  }

  geocodeAddress(geocoder, resultsMap) {
    var address = this.getLocation(this.params.place);
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
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

  getLocation(place){
    let address: string;
    address = `${place},bogotá`;
    return address;
  }

  shareNews(news) {
    let msg = `${news.title} ${news.source_link}`
    this.socialSharing.share(msg, "App DDS", null, null)
      .then( response => {
        console.log("se pudo compartir");
      }).catch((e) => {
        console.error(e);
      });
  }

  shareEvent(event) {
    let url = `myapp://home/content/${event.id}`;
    let msg = "En Bogota se puede ser"
    this.socialSharing.share(msg, null, null, url)
      .then( response => {
        console.log("se pudo compartir");
      }).catch((e) => {
        console.error(e);
      });
  }
}
