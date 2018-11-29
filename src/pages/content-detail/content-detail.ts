import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DetailContentService } from '../../services/detail-content.service';
import { ServerConfig } from '../../../config/server';
import { SocialSharing } from '@ionic-native/social-sharing';
import { EventProvider } from '../../providers/event/event';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DomSanitizer } from '@angular/platform-browser';
import html2canvas from 'html2canvas';

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
  im;
  image;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private detailService: DetailContentService,
    public geolocation: Geolocation,
    private socialSharing: SocialSharing,
    private eventService: EventProvider,
    private iab: InAppBrowser,
    private sanitizer:DomSanitizer
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
    console.log("---api--",this.api);
    this.typeContent = this.detailService.getContent();
    this.id = this.navParams.get('id');
    this.params = this.navParams.get('data');
    this.eventService.getImage(`${this.api}${this.params.image}`).subscribe(
      (response) =>{
        console.log(response);
          let tmp = URL.createObjectURL(new Blob([response],{type: 'image/jpeg'}));
          this.image = this.sanitizer.bypassSecurityTrustUrl(tmp);
        console.log("------",this.image);
      },
      (error) => console.log(error)
    );
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

  share( content ) {
    if (this.typeContent === 'evento'){
      const div = document.getElementById("contentShare");
      html2canvas(div).then((canvas)=>{
        let info = canvas.toDataURL("image/jpg");
        this.im = info;
        this.socialSharing.share(null, null, info, null)
        .then( response => {
          console.log("se pudo compartir");
        }).catch((e) => {
          console.error(e);
        });
      });
    }else{
      let msg = `${content.title}`;
      let url = `${content.source_link}`;
      this.socialSharing.share(msg, null, null, url)
        .then( response => {
          console.log("se pudo compartir");
        }).catch((e) => {
          console.error(e);
        });
    }
  }

  goToLink() {
    const browser = this.iab.create(this.params.source_link, '_system');
  }
}
