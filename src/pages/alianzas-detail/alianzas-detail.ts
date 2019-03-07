import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServerConfig } from '../../../config/server';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the AlianzasDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alianzas-detail',
  templateUrl: 'alianzas-detail.html',
})
export class AlianzasDetailPage {

  public infoData : any;
  protected api = ServerConfig.apiEndPoint;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {

    this.infoData = {
      "name": navParams.get('name'),
      "description": navParams.get('description'),
      "offer": navParams.get('offer'),
      "website": navParams.get('website'),
      "phone": navParams.get('phone'),
      "email": navParams.get('email'),
      "state": navParams.get('state'),
      "finish_date": navParams.get('finish_date'),
      "image": navParams.get('image'),
      "created_at": navParams.get('created_at'),
      "updated_at": navParams.get('updated_at')
    }

  }

  goToWebPage(){

    var web = this.infoData.website;
    if( !web.includes('http')){
      web = `http://${web}`;
    }

    this.iab.create(web, '_system');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlianzasDetailPage');
  }

}
