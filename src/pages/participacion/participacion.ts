import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-participacion',
  templateUrl: 'participacion.html',
})
export class ParticipacionPage {

  information: any[];

  items = [
        {
            "name": "Fortalecimiento a la participación",
            "children": [
                {
                    "information": "Si deseas fortalecimiento a procesos participativos y acompañamiento a los mismos",
                    "description": "Instituto Distrital de la Participación y Acción comunal",
                    "web": "www.participacionbogota.gov.co",
                    "description2": "Gerencia de Mujer y Género ",
                    "mail2": "mujerygenero@participacionbogota.gov.co",
                    "phone2": "2417900",
                    "description3": "Subdirección para Asuntos LGBT",
                    "address3": "Centros comunitarios LGBTI de Bogotá (Mártires y teusaquillo)",
                    "description4": "Secretaría de Planeación. Dirección de Diversidad Sexual",
                    "mail4": "diversidadsexual@sdp.gov.co ",
                    "phone4": "3358000 ext 8555"
                }

            ]
        }
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
    this.information = this.items;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipacionPage');
  }

  goToWebPage(link){

    var web = link;
    if( !web.includes('http')){
      web = `http://${web}`;
    }

    this.iab.create(web, '_system');
  }

  toggleSection(i) {
  this.information[i].open = !this.information[i].open;
}

toggleItem(i, j) {
  this.information[i].children[j].open = !this.information[i].children[j].open;
}

}
