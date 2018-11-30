import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-trabajo',
  templateUrl: 'trabajo.html',
})
export class TrabajoPage {

  information: any[];
  footer: boolean = true;

  items = [
        {
            "name": "Trabajo",
            "children": [
                {
                    "information": "Si deseas acceder información para encontrar convocatorias laborales.",
                    "description": "Secretaria de Desarrollo Económico - Agencia Pública de empleo",
                    "phone": "3693777 ext: 140",
                    "web": "www.educacionbogota.edu.co",
                    "address": "Plaza de artesanos, plaza 8 Carrera 60 Número 63 A - 52"
                }

            ]
        },
        {
            "name": "Emprendimiento",
            "children": [
              {
                "information": "Ingreso al sistema educativo para personas entre tres y 18 años.",
                "description": "Secretaría de Educación. Subsecretaría de acceso y permanencia",
                "phone": "3241000 Ext 3100",
                "web": "www.educacionbogota.edu.co",
                "address": "Plaza de artesanos, plaza 8 Carrera 60 Número 63 A - 52"
              }
            ]
        }
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.information = this.items;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrabajoPage');
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
