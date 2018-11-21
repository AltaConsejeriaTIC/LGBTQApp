import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-puntos',
  templateUrl: 'puntos.html',
})
export class PuntosPage {

  information: any[];

  items = [
        {
            "name": "Casa refugio LGBTI",
            "icon": "ios-home",
            "children": [
                {
                    "image":"../assets/imgs/refugio.png",
                    "information": "Hogar transitorio para personas LGBTI que han sido víctimas de violencia y no tienen una red de apoyo. En esta casa se comienza un proceso de restablecimiento de derechos, si necesitas entrar a esta casa puedes acudir con los siguientes datos de contacto:",
                    "description": "Sector Salud - CAMI Zampar Mendoza",
                    "phone": "(57) 3444484",
                    "address": "Diagonal 34 No. 5 - 43",
                    "mail": "casarefugio@gobiernobogota.gov.co"
                }

            ]
        },
        {
            "name": "Centro comunitario Teusaquillo",
            "icon": "ios-home",
            "children": [
              {
                "image":"../assets/imgs/teusaquillo.png",
                "information": "Centro de atención integral en donde se ofrece un conjunto de acciones psicosociales y de desarrollo comunitario a personas LGBTI",
                "description": "Sector Salud - CAMI Zampar Mendoza",
                "phone": "(57) 3384616",
                "address": "Transversal 17ª bis Nº 36-74"
              }
            ]
        },
        {
            "name": "Centro comunitario los Mártires",
            "icon": "ios-home",
            "children": [
                {
                  "image":"../assets/imgs/martires.png",
                  "information": "Centro de atención integral en donde se ofrece un conjunto de acciones psicosociales y de desarrollo comunitario a personas LGBTI.",
                  "description": "Sector Salud - CAMI Zampar Mendoza",
                  "phone": "(57) 2436286",
                  "address": "Carrera 14 bis Nº 21-10 "
                }
            ]
        },
        {
            "name": "Unidad contra la discriminación UCD",
            "icon": "ios-home",
            "children": [
                {
                  "image":"../assets/imgs/unidad.png",
                  "information": "Esta unidad busca atender jurídicamente vulneraciones a los derechos fundamentales de personas LGBTI.",
                  "description": "Sector Salud - CAMI Zampar Mendoza",
                  "phone": "(57) 5188471 Ext: 4128 / (57) 3279797 Ext. 1835",
                  "address": "Calle 19 Nº 27-09"
                }
            ]
        }
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.information = this.items;
    console.log(this.information);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PuntosPage');
  }

  toggleSection(i) {
  this.information[i].open = !this.information[i].open;
}

toggleItem(i, j) {
  this.information[i].children[j].open = !this.information[i].children[j].open;
}

}
