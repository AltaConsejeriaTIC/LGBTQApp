import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlianzasAliadoPage } from '../alianzas-aliado/alianzas-aliado';
import { AlianzasDetailPage } from '../alianzas-detail/alianzas-detail';
import { RedPage } from '../red/red';
import { AllianceProvider } from '../../providers/alliance/alliance';
import { ServerConfig } from '../../../config/server';

@Component({
  selector: 'page-alianza',
  templateUrl: 'alianza.html'
})
export class AlianzaPage {

  public allAlliances = [];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public allianceProvider: AllianceProvider) {

    this.loadAlliances();
  }
  protected api = ServerConfig.apiEndPoint;

  loadAlliances(){
    this.allianceProvider.getAlliances(`${this.api}/alliances`)
    .subscribe(
      (alliances) => {
        this.allAlliances = alliances;
      },
      (error) => console.log(error)
    );

  }

  backButtonClick() {
    console.log('// dos omething');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlianzaPage');
  }

  goToRed(){
    this.navCtrl.push(RedPage);
  }

  goToSerAliado(){
    this.navCtrl.push(AlianzasAliadoPage);
  }

  goToDetail(){
    this.navCtrl.push(AlianzasDetailPage);
  }

  itemSelected( data ){

  }


}
