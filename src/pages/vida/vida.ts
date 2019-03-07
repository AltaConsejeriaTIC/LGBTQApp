import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-vida',
  templateUrl: 'vida.html',
})
export class VidaPage {

  information: any[];

  items = [
        {
            "name": "Cualquier tipo de violencia",
            "children": [
                {
                    "information": "Si eres víctima de cualquier tipo de violencia física, psicológica, sexual, entre otras y requieres atención y orientación para el acceso a la justicia.",
                    "description": "Centro de Atención Penal Integral de Víctimas - CAPIV",
                    "address": "Calle 19 número 27 - 09",
                    "information2": "La Personería de Bogotá te ofrece orientación y guía si sientes que tus derechos han sido vulnerados por cualquier motivo o razón",
                    "description2": "Línea de emergencia de Personería 143",
                    "address2": "Carrera 43 número 25 B - 17",
                    "phone": "3820450 Ext: 5245 - 5246"
                }

            ]
        },
        {
            "name": "Explotación sexual de NNA",
            "children": [
              {
                "information": "Si requieres atención, prevención o denuncia por explotación sexual de niños, niñas o adolescentes.",
                "description": "Subdirecciones locales de Integración social",
                "web": "www.educacionbogota.edu.co",
                "webText": "o en Centros Comunitarios LGBTI",
                "description2": "Instituto Distrital para la protección de la Niñez y la Juventud - IPRON",
                "web2": "www.idipron.gov.co",
                "address2": "Carrera 27 A número 63 B - 07",
                "phone": "2112287"
              }
            ]
        },
        {
            "name": "Protección",
            "children": [
                {
                  "information": "Si requieres atención por cualquier tipo de violencia o discriminación a razón de tu orientación sexual e identidad de género.",
                  "description": "Casas refugio",
                  "phone": "3184918552 - 3387000 ext 5356",
                  "web": "www.integracionsocial.gov.co",
                  "mail": "casarefugio@gobiernobogota.gov.co"
                }
            ]
        },
        {
            "name": "Atención a víctimas del conflicto armado",
            "children": [
                {
                  "information": "Si eres víctima del conflicto armado y requieres atención.",
                  "description": "Alta Consejería para los derechos de las víctimas ",
                  "web": "www.secretariageneral.gov.co",
                  "webText": "y consulta el centro local de atención a víctimas mas cercano",
                }
            ]
        },
        {
            "name": "Atención Jurídica",
            "children": [
                {
                  "information": "Si requieres atención jurídica.",
                  "description": "Unidad contra la Discriminación",
                  "address": "Calle 19 número 27 - 09",
                  "description2": "Secretaría Distrital de Gobierno, Dirección de Derechos Humanos",
                  "phone": "2112287"
                }
            ]
        },
        {
            "name": "Atención psicojurídica",
            "children": [
                {
                  "information": "Si requieres atención psicojurídica.",
                  "description": "Secretaría de la Mujer ",
                  "web": "www.sdmujer.gov.co",
                  "webText": "y consulta la casa de igualdad de la mujeres mas cercana.",
                  "description2": "Secretaría Distrital de Gobierno, Dirección de Derechos Humanos",
                  "phone": "3387000 ext: 5310",
                }
            ]
        },
        {
            "name": "Violencia en el espacio público",
            "children": [
                {
                  "information": "Si eres víctima de violencia en el espacio público puedes llamar al 123."
                }
            ]
        },
        {
            "name": "Violencia en el transporte público",
            "children": [
                {
                  "information": "Si eres víctima de violencia en el transporte público.",
                  "description": "Secretaría Distrital de Movilidad",
                  "web": "www.movilidadbogota.gov.co",
                  "webText": "Ingresa al sitio web y consulta el Centro local de movilidad mas cercano.",
                  "description2": "Dirección de servicio al ciudadano de la Secretaría Distrital de Movilidad"
                }
            ]
        },
        {
            "name": "Ser reconocido como víctima del conflicto armado",
            "children": [
                {
                  "information": "Si requieres que te reconozcan como víctima del conflicto armado",
                  "description": "Alta Consejería para los derechos de las víctimas",
                  "web": "www.secretariageneral.gov.co",
                  "webText": "Ingresa al sitio web y consulta el centro local de atención a víctimas mas cercano"
                }
            ]
        }
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
    this.information = this.items;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VidaPage');
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
