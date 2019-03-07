import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-educacion',
  templateUrl: 'educacion.html',
})
export class EducacionPage {

  information: any[];

  items = [
        {
            "name": "Ingreso escolar menores de 3 años",
            "children": [
                {
                    "information": "Ingreso al sistema educativo para personas menores de tres años.",
                    "description": "Secretaría de Integración Social - Subdirección de infancia",
                    "phone": "3279797 extensión 1005 - 1006",
                    "web": "www.integracionsocial.gov.co"
                }

            ]
        },
        {
            "name": "Ingreso escolar de 3 a 18 años",
            "children": [
              {
                "information": "Ingreso al sistema educativo para personas entre tres y 18 años.",
                "description": "Secretaría de Educación. Subsecretaría de acceso y permanencia",
                "phone": "3241000 Ext 3100",
                "web": "www.educacionbogota.edu.co",
                "webText": "O Dirígete a las Direcciones Locales de educación mas cercanas."
              }
            ]
        },
        {
            "name": "Educación Flexible",
            "children": [
                {
                  "information": "Si deseas ingresar al sistema educativo a través de un modelo de educación flexible. Los sistemas de educación flexibles son para personas mayores o con horarios dispuestos para personas que trabajan.",
                  "description": "Secretaría de Integración Social - Subdirección para asuntos LGBTI",
                  "phone": "3279797 Ext. 68000",
                  "web": "www.integracionsocial.gov.co"
                }
            ]
        },
        {
            "name": "Educación superior",
            "children": [
                {
                  "information": "Si deseas obtener información respecto a becas para acceso a educación superior.",
                  "description": "Secretaría de Educación. Subsecretaría de integración institucional",
                  "phone": "3241000 Ext 3100",
                  "web": "www.educacionbogota.edu.co"
                }
            ]
        },
        {
            "name": "Bachillerato y educación técnica",
            "children": [
                {
                  "information": "Si deseas acceder a educación y/o educación técnica.",
                  "description": "Instituto Distrital para la protección de la Niñez y la Juventud",
                  "address": "IPRON. Carrera 27 A número 63 B - 07 ",
                  "phone": "2112287",
                  "web": "www.idipron.gov.co"
                }
            ]
        },
        {
            "name": "Hostigamiento escolar",
            "children": [
                {
                  "information": "Si eres víctima de hostigamiento escolar.",
                  "description": "Secretaría de Educación. Dirección de Inclusión e integración de poblaciones ",
                  "phone": "3241000 Ext: 2209 ",
                  "web": "www.idipron.gov.co",
                  "webText": "O Dirígete a las Direcciones Locales de educación mas cercanas.",
                  "web2": "www.educacionbogota.edu.co"
                }
            ]
        }
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
    this.information = this.items;
    console.log(this.information);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuntosPage');
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
  
    this.information.forEach((item, index) => {
      if (index != i){
        this.information[index].open = false;
      }
    });
  }

}
