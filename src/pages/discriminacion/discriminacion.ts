import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormDenunciaPage } from '../form-denuncia/form-denuncia';

@Component({
  selector: 'page-discriminacion',
  templateUrl: 'discriminacion.html',
})
export class DiscriminacionPage {

  information: any[];

  items = [
        {
            "name": "Discriminación",
            "icon": "warning",
            "children": [
                {
                    "information1": "Eres víctima de discriminación cuando (en tu hogar, en tu trabajo, institución educativa, de salud o en un espacio público):",
                    "information2": "• Recibes trato desfavorable por ser Lesbiana, Gay, Bisexual, Transgénero o Intersexual.",
                    "information3": "• Te niegan el acceso al empleo, a la atención médica, a la educación o a espacios en establecimientos públicos.",
                    "information4": "• Recibes represalias por demostración de afecto en público.",
                    "information5": "• Cuando de manera repetida y sistemática se burlan de tus expresiones, gestos o ropa."

                }

            ]
        },
        {
            "name": "Violencia Física",
            "icon": "warning",
            "children": [
              {
                "information1": "• Violación al derecho a la vida.",
                "information2": "• Actos como Empujones, palizas, lanzamiento de botellas, piedras u otros objetos.",
                "information3": "• Ataques multitudinarios.",
                "information4": "• Violación a la integridad personal.",
                "information5": "• Violación sexual, privación de la libertad, tortura, tratos crueles, inhumanos y degradantes."
              }
            ]
        },
        {
            "name": "Violencia en servicios de salud",
            "icon": "warning",
            "children": [
                {
                  "information1": "• Negligencia en prestación de servicios de salud.",
                  "information2": "• Atención médica necesaria negada, rechazo del personal médico al contacto físico necesario o la utilización de precauciones excesivas, se culpan a los pacientes por su estado de salud, utilizan lenguaje grosero, abusivo o abusan físicamente."
                }
            ]
        },
        {
            "name": "Violencia simbólica",
            "icon": "warning",
            "children": [
                {
                  "information1": "• Discurso de Odio e incitación a la violencia.",
                  "information2": "• Trato hostil, abusivo, grosero o humillante.",
                  "information3": "• Intentos de “modificar” la orientación sexual y la identidad de género."
                }
            ]
        },
        {
            "name": "Violencia psicológica",
            "icon": "warning",
            "children": [
                {
                  "information1": "• Cuando degradan tu manera de pensar o actuar.",
                  "information2": "• Amenazas o intimidación para ocultar tu orientación sexual o identidad de género.",
                  "information3": "• No permitir expresarte libremente."
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

    this.information.forEach((item, index) => {
      if (index != i){
        this.information[index].open = false;
      }
    });
  }

}
