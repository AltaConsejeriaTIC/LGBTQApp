import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage} from 'ionic-angular';
import { DetailContentService } from '../../services/detail-content.service';
import { ServerConfig } from '../../../config/server';
import { SocialSharing } from '@ionic-native/social-sharing';
import { EventProvider } from '../../providers/event/event';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import html2canvas from 'html2canvas';

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
  hideShareButton = false;
  image;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private detailService: DetailContentService,
    private socialSharing: SocialSharing,
    private eventService: EventProvider,
    private iab: InAppBrowser,
    public platform: Platform,
    private sanitizer:DomSanitizer
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


  getLocation(place){
    let address: string;
    address = `${place},bogotá`;
    return address;
  }

  screenShot() {
    const div = document.getElementById("contentShare");
    html2canvas(div).then((canvas)=>{
      let info = canvas.toDataURL("image/jpg");
      this.socialSharing.share(null, null, info, null)
        .then( () => {
          console.log("se pudo compartir");
          this.hideShareButton = false;
        }).catch((e) => {
        console.error(e);
      });
    });
  }

  share( content ) {
    if (this.typeContent === 'evento'){
      this.hideShareButton = true;
      setTimeout(() => {
        this.screenShot();
      },10);
    }else{
      let msg = `${content.title}`;
      let url = `${content.source_link}`;
      this.socialSharing.share(msg, null, null, url)
        .then( () => {
          console.log("se pudo compartir");
        }).catch((e) => {
          console.error(e);
        });
    }
  }

  goToLink() {
    this.iab.create(this.params.source_link, '_system');
  }

  goToMaps() {

    if( this.params.latitude !== 0 && this.params.longitude !== 0 ){
      this.iab.create(this.GeoURI, '_system');
    }
  }
}
