import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormDenunciaPage } from '../form-denuncia/form-denuncia';

@Component({
  selector: 'page-discriminacion',
  templateUrl: 'discriminacion.html',
})
export class DiscriminacionPage {

  information: any[];

  items = [
        {
            "name": "Casa refugio LGBTI",
            "icon": "ios-home",
            "children": [
                {
                    "image":"../assets/imgs/home.png",
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
                "image":"../assets/imgs/home.png",
                "information": "Texto descriptivo que le indique a los usuarios qué clase de beneficios van a recibir en las instituciones referenciadas.",
                "description": "Sector Salud - CAMI Zampar Mendoza",
                "phone": "(57) 3444484",
                "address": "Diagonal 34 No. 5 - 43",
                "mail": "casarefugio@gobiernobogota.gov.co"
              }
            ]
        },
        {
            "name": "Centro comunitario los Mártires",
            "icon": "ios-home",
            "children": [
                {
                  "image":"../assets/imgs/home.png",
                  "information": "Texto descriptivo que le indique a los usuarios qué clase de beneficios van a recibir en las instituciones referenciadas.",
                  "description": "Sector Salud - CAMI Zampar Mendoza",
                  "phone": "(57) 3444484",
                  "address": "Diagonal 34 No. 5 - 43",
                  "mail": "casarefugio@gobiernobogota.gov.co"
                }
            ]
        },
        {
            "name": "Unidad contra la discriminación UCD",
            "icon": "ios-home",
            "children": [
                {
                  "image":"../assets/imgs/home.png",
                  "information": "Texto descriptivo que le indique a los usuarios qué clase de beneficios van a recibir en las instituciones referenciadas.",
                  "description": "Sector Salud - CAMI Zampar Mendoza",
                  "phone": "(57) 3444484",
                  "address": "Diagonal 34 No. 5 - 43",
                  "mail": "casarefugio@gobiernobogota.gov.co"
                }
            ]
        }
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.information = this.items;
    console.log(this.information);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscriminacionPage');
  }

  goToFormDenuncia(){
    this.navCtrl.push(FormDenunciaPage);
  }

  toggleSection(i) {
  this.information[i].open = !this.information[i].open;
}

toggleItem(i, j) {
  this.information[i].children[j].open = !this.information[i].children[j].open;
}

}
