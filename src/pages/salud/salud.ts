import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-salud',
  templateUrl: 'salud.html',
})
export class SaludPage {

  information: any[];

  items = [
        {
            "name": "Promoción y prevención",
            "children": [
                {
                    "information": "Si deseas información sobre Infecciones de Transmisión Sexual, Enfermedades Crónicas, transmisibles y no transmisibles, de alto costo, maternidad y gestación. Acompañamiento y asesoría en construcción identitaria.",
                    "description": "Subred Centro Oriente:",
                    "address": "IPRON. Carrera 27 A número 63 B - 07 ",
                    "description2": "Subred Centro Oriente:",
                    "address2": "IPRON. Carrera 27 A número 63 B - 07 ",
                    "description3": "Subred Centro Oriente:",
                    "address3": "IPRON. Carrera 27 A número 63 B - 07 ",
                    "description4": "Subred Centro Oriente:",
                    "address4": "IPRON. Carrera 27 A número 63 B - 07 "
                }

            ]
        },
        {
            "name": "Acompañamiento solidario",
            "children": [
              {
                "information": "Si no cuentas con una red de apoyo y requieres acompañamiento de un profesional para acceder a los servicios del sistema de salud.d",
                "description": "Subred Centro Oriente:",
                "address": "IPRON. Carrera 27 A número 63 B - 07 ",
                "description2": "Subred Centro Oriente:",
                "address2": "IPRON. Carrera 27 A número 63 B - 07 ",
                "description3": "Subred Centro Oriente:",
                "address3": "IPRON. Carrera 27 A número 63 B - 07 ",
                "description4": "Subred Centro Oriente:",
                "address4": "IPRON. Carrera 27 A número 63 B - 07 "
              }
            ]
        },
        {
            "name": "Acompañamieno construcción identitaria",
            "children": [
                {
                  "information": "Si requieres de acompañamiento o asesoría para realizar tu proceso de tránsito.",
                  "description": "Subred Centro Oriente:",
                  "address": "IPRON. Carrera 27 A número 63 B - 07 ",
                  "description2": "Subred Centro Oriente:",
                  "address2": "IPRON. Carrera 27 A número 63 B - 07 ",
                  "description3": "Subred Centro Oriente:",
                  "address3": "IPRON. Carrera 27 A número 63 B - 07 ",
                  "description4": "Subred Centro Oriente:",
                  "address4": "IPRON. Carrera 27 A número 63 B - 07 "
                }
            ]
        },
        {
            "name": "Sisben",
            "children": [
                {
                  "information": "Si necesitas afiliarte al SISBEN",
                  "description": "SuperCades de la ciudad. ",
                  "webText": "SuperCades de la ciudad. Consulta el mas cercano en: ",
                  "web": "http://www.bogota.gov.co/gobierno/supercades"
                }
            ]
        },

    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.information = this.items;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaludPage');
  }

  toggleSection(i) {
  this.information[i].open = !this.information[i].open;
}

toggleItem(i, j) {
  this.information[i].children[j].open = !this.information[i].children[j].open;
}

}
