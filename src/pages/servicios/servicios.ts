import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
})
export class ServiciosPage {

  information: any[];
  footer: boolean = true;

  items = [
        {
            "name": "Alimentación",
            "children": [
                {
                    "information": "Si deseas acceder a servicios de alimentación.",
                    "description": "Secretaría de Integración Social - Subdirección para asuntos LGBTI",
                    "phone": "3279797 Ext. 68000",
                    "web": "www.integracionsocial.gov.co",
                    "webText": "O Dirígete a las Direcciones Locales de educación mas cercanas."
                }

            ]
        },
        {
            "name": "Emergencia",
            "children": [
              {
                "information": "Si necesitas apoyo para el acceso a servicios sociales (emergencia naturales, funerario, centros de atención de habitabilidad en calle, centros día para personas mayore y centros crecer para personas con discapacidad).",
                "description": "Secretaría de Integración Social - Subdirección para asuntos",
                "phone": "3279797 Ext. 68000",
                "web": "www.integracionsocial.gov.co"
              }
            ]
        },
        {
            "name": "Atención psicosocial",
            "children": [
                {
                  "information": "Si requieres atención psicosocial.",
                  "description": "Secretaría de Integración Social - Subdirección para asuntos LGBTI",
                  "phone": "3279797 Ext. 68000",
                  "web": "www.integracionsocial.gov.co"
                }
            ]
        }
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.information = this.items;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosPage');
  }

  toggleSection(i) {

    this.information[i].open = !this.information[i].open;

    this.information.forEach((item, index) => {
      if (index != i){
        this.information[index].open = false;
      }
    });

    this.information[i].open ? this.footer = false : this.footer = true;

  }

}
