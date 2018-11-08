import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-acceso-derechos',
  templateUrl: 'acceso-derechos.html',
})
export class AccesoDerechosPage{

  information: any[];

  items = [
        {
            "name": "Urgencias",
            "icon": "icon-icono-politica",
            "children": [
                {
                    "information": "Texto descriptivo que le indique a los usuarios qué clase de beneficios van a recibir en las instituciones referenciadas.",
                    "description": "Sector Salud - CAMI Zampar Mendoza",
                    "phone": "(57) 3444484",
                    "address": "Diagonal 34 No. 5 - 43"
                }

            ]
        },
        {
            "name": "Salud Sexual y Reproductiva",
            "icon": "icon-icono-alianzas",
            "children": [
              {
                "information": "Texto descriptivo que le indique a los usuarios qué clase de beneficios van a recibir en las instituciones referenciadas.",
                "description": "Sector Salud - CAMI Zampar Mendoza",
                "phone": "(57) 3444484",
                "address": "Diagonal 34 No. 5 - 43"

              }
            ]
        },
        {
            "name": "Transformaciones corporales",
            "icon": "icon-icono-mensaje",
            "children": [
                {
                  "information": "Texto descriptivo que le indique a los usuarios qué clase de beneficios van a recibir en las instituciones referenciadas.",
                  "description": "Sector Salud - CAMI Zampar Mendoza",
                  "phone": "(57) 3444484",
                  "address": "Diagonal 34 No. 5 - 43"

                }
            ]
        },
        {
            "name": "Barreras de acceso a los servicios de salud",
            "icon": "icon-icono-llamada",
            "children": [
                {
                  "information": "Texto descriptivo que le indique a los usuarios qué clase de beneficios van a recibir en las instituciones referenciadas.",
                  "description": "Sector Salud - CAMI Zampar Mendoza",
                  "phone": "(57) 3444484",
                  "address": "Diagonal 34 No. 5 - 43"

                }
            ]
        },
        {
            "name": "Afiliación Seguridad Social - SISBEN",
            "icon": "icon-campana-boton",
            "children": [
                {
                  "information": "Texto descriptivo que le indique a los usuarios qué clase de beneficios van a recibir en las instituciones referenciadas.",
                  "description": "Sector Salud - CAMI Zampar Mendoza",
                  "phone": "(57) 3444484",
                  "address": "Diagonal 34 No. 5 - 43"
                }
            ]
        },
        {
            "name": "Subsidios",
            "icon": "icon-icono-hora",
            "children": [
                {
                  "information": "Texto descriptivo que le indique a los usuarios qué clase de beneficios van a recibir en las instituciones referenciadas.",
                  "description": "Sector Salud - CAMI Zampar Mendoza",
                  "phone": "(57) 3444484",
                  "address": "Diagonal 34 No. 5 - 43"
                }
            ]
        },
    ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.information = this.items;
        console.log(this.information);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccesoDerechosPage');
  }

  toggleSection(i) {
  this.information[i].open = !this.information[i].open;
}

toggleItem(i, j) {
  this.information[i].children[j].open = !this.information[i].children[j].open;
}

}
