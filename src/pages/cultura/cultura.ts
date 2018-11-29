import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cultura',
  templateUrl: 'cultura.html',
})
export class CulturaPage {

  information: any[];
  footer: boolean = true;

  items = [
        {
            "name": "Expresiones culturales",
            "children": [
                {
                    "information": "Si deseas conocer la oferta cultural, cursos en relación a proyectos culturales o gestión cultural.",
                    "description": "Secretaría Distrital de Cultura. Dirección de Asuntos Locales y participación ",
                    "phone": "3274850 Ext: 642",
                    "web": "www.culturarecreacionydeporte.gov.co"
                }

            ]
        },
        {
            "name": "Expresiones artísticas",
            "children": [
              {
                "information": "Si deseas conocer la oferta artística, cursos en relación a proyectos culturales o gestión cultural.",
                "description": "Instituto Distrital de las Artes - IDARTES - Subdirección de artes",
                "phone": "3795750",
                "web": "www.idartes.gov.co"
              }
            ]
        },
        {
            "name": "Deportes",
            "children": [
                {
                  "information": "Si deseas conocer la oferta deportiva y recreativa, cursos en relación a proyectos o gestión deportiva.",
                  "description": "Instituto Distrital de Recreación y Deportes - IDRD, Área de Recreación comunitaria",
                  "phone": "6477500",
                  "web": "www.idrd.gov.co"
                }
            ]
        }
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.information = this.items;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CulturaPage');
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
