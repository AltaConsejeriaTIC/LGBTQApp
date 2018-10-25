import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-acceso-derechos',
  templateUrl: 'acceso-derechos.html',
})
export class AccesoDerechosPage implements OnInit{

  information: any[];

  items = [
        {
            "name": "Urgencias",
            "icon": "icon-icono-politica",
            "children": [
                {
                    "name": "Special Academy Pizza",
                    "information": "Pastrami pork belly ball tip andouille corned beef jerky shankle landjaeger. Chicken chuck porchetta picanha, ham brisket tenderloin venison meatloaf landjaeger jowl.",

                }

            ]
        },
        {
            "name": "Salud Sexual y Reproductiva",
            "icon": "icon-icono-alianzas",
            "children": [
              {
                  "name": "Special Academy Pizza",
                  "information": "Pastrami pork belly ball tip andouille corned beef jerky shankle landjaeger. Chicken chuck porchetta picanha, ham brisket tenderloin venison meatloaf landjaeger jowl.",

              }
            ]
        },
        {
            "name": "Transformaciones corporales",
            "icon": "icon-icono-mensaje",
            "children": [
                {
                    "name": "Special Academy Pizza",
                    "information": " Landjaeger fatback shank frankfurter, tongue shoulder ham strip steak pancetta pork short loin corned beef short ribs biltong cow",

                }
            ]
        },
        {
            "name": "Barreras de acceso a los servicios de salud",
            "icon": "icon-icono-llamada",
            "children": [
                {
                    "name": "Special Academy Pizza",
                    "information": "Pastrami pork belly ball tip andouille corned beef jerky shankle landjaeger. Chicken chuck porchetta picanha, ham brisket tenderloin venison meatloaf landjaeger jowl.",

                }
            ]
        },
        {
            "name": "Afiliación Seguridad Social - SISBEN",
            "icon": "icon-campana-boton",
            "children": [
                {
                    "name": "Special Academy Pizza",
                    "information": "Pastrami pork belly ball tip andouille corned beef jerky shankle landjaeger. Chicken chuck porchetta picanha, ham brisket tenderloin venison meatloaf landjaeger jowl.",

                }
            ]
        },
        {
            "name": "Subsidios",
            "icon": "icon-icono-hora",
            "children": [
                {
                    "name": "Special Academy Pizza",
                    "information": "Pastrami pork belly ball tip andouille corned beef jerky shankle landjaeger. Chicken chuck porchetta picanha, ham brisket tenderloin venison meatloaf landjaeger jowl.",

                }
            ]
        },
    ]


  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer) {
        this.information = this.items;
        console.log(this.information);
  }

  ngOnInit() {

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
