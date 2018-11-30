import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrganizacionAparecerPage } from '../organizacion-aparecer/organizacion-aparecer';
import { OrganizacionDetailPage } from '../organizacion-detail/organizacion-detail';
import { ServerConfig } from '../../../config/server';
import { OrganizationProvider } from '../../providers/organization/organization';

/**
 * Generated class for the OrganizacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-organizacion',
  templateUrl: 'organizacion.html'
})
export class OrganizacionPage {


  protected api = ServerConfig.apiEndPoint;
  public allOrganizations = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public organizationProvider: OrganizationProvider) {

    this.organizationProvider.getOrganizations(`${this.api}/organizations`)
    .subscribe(
      (organizations) => {
        this.allOrganizations = organizations;
      },
      (error) => console.log(error)
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizacionPage');
  }
  goToAparecer(){
    this.navCtrl.push(OrganizacionAparecerPage);
  }

  goToDetail(){
    this.navCtrl.push(OrganizacionDetailPage);
  }

  itemSelected( data ){

    this.navCtrl.push(OrganizacionDetailPage, {
      name: data.name,
      description: data.description,
      website: data.website,
      address: data.address,
      email: data.email,
      phone: data.phone,
      state: data.state,
      image: data.image,
      created_at: data.created_at,
      updated_at: data.updated_at
    }).catch(err => {
      console.error("Error en goToFormDenunciaSuceso", err, err.stack);
    });

  }
}
