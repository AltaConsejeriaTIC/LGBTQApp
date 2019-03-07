import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServerConfig } from '../../../config/server';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the OrganizacionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-organizacion-detail',
  templateUrl: 'organizacion-detail.html',
})
export class OrganizacionDetailPage {

  public infoData : any;
  protected api = ServerConfig.apiEndPoint;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {

    this.infoData = {
      "name": navParams.get('name'),
      "description": navParams.get('description'),
      "website": navParams.get('website'),
      "address": navParams.get('address'),
      "email": navParams.get('email'),
      "phone": navParams.get('phone'),
      "state": navParams.get('state'),
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
    console.log('ionViewDidLoad OrganizacionDetailPage');
  }

}
