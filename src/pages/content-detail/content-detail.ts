import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { DetailContentService } from '../../services/detail-content.service';
import { ServerConfig } from '../../../config/server';
import { SocialSharing } from '@ionic-native/social-sharing';
import { EventProvider } from '../../providers/event/event';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';

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
  match;
  GeoURI: string;
  protected api = ServerConfig.apiEndPoint;
  protected id: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private detailService: DetailContentService,
    private socialSharing: SocialSharing,
    private eventService: EventProvider,
    private iab: InAppBrowser,
    public platform: Platform
  ) {
    this.match = this.navParams.get('data');
    this.loadData(this.match);
    this.setTitle();
    if(this.platform.is('ios')){
      this.GeoURI = `maps://?q=${this.params.latitude},${this.params.longitude}&z=17`
    }else{
      this.GeoURI = `geo:${this.params.latitude},${this.params.longitude}?q=${this.params.latitude},${this.params.longitude}&z=17`;
    }
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

  share( content ) {
    let msg;
    let url;
    if (this.typeContent === 'evento'){
      msg = `${content.title}`;
      url = `myapp://home/content/${content.id}`;
    }else{
      msg = `${content.title}`;
      url = `${content.source_link}`;
    }
    this.socialSharing.share(msg, null, null, url)
      .then( () => {
        console.log("se pudo compartir");
      }).catch((e) => {
        console.error(e);
      });
  }

  goToLink() {
    this.iab.create(this.params.source_link, '_system');
  }

  goToMaps() {
    this.iab.create(this.GeoURI, '_system');
  }
}
