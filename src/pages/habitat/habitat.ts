import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-habitat',
  templateUrl: 'habitat.html',
})
export class HabitatPage {

  information: any[];

  items = [
        {
            "name": "Subsidio de vivienda",
            "children": [
                {
                    "information": "Si necesitas un subsidio de vivienda.",
                    "description": "SUPERCADE 20 de Julio:",
                    "address": "Carrera 5A No. 30D – 20 Sur",
                    "description2": "SUPERCADE Suba:",
                    "address2": "Avenida Calle 145 No. 103B - 90" ,
                    "description3": "SUPERCADE Bosa:",
                    "address3": "Avenida Calle 57 R Sur No. 72 D -12",
                    "description4": "SUPERCADE CAD:",
                    "address4": "Carrera 30 No. 25 – 90"
                }

            ]
        }
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.information = this.items;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitatPage');
  }

  toggleSection(i) {
  this.information[i].open = !this.information[i].open;
}

toggleItem(i, j) {
  this.information[i].children[j].open = !this.information[i].children[j].open;
}

}
