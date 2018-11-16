import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EducacionPage } from '../educacion/educacion';
import { SaludPage } from '../salud/salud';
import { HabitatPage } from '../habitat/habitat';
import { VidaPage} from '../vida/vida';
import { ParticipacionPage} from '../participacion/participacion';
import { CulturaPage} from '../cultura/cultura';
import { ServiciosPage} from '../servicios/servicios';
import { TrabajoPage} from '../trabajo/trabajo';


@Component({
  selector: 'page-acceso-derechos',
  templateUrl: 'acceso-derechos.html',
})
export class AccesoDerechosPage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccesoDerechosPage');
  }

  goToEducacion(){
    this.navCtrl.push(EducacionPage);
  }

  goToSalud(){
    this.navCtrl.push(SaludPage);
  }

  goToHabitat(){
    this.navCtrl.push(HabitatPage);
  }

  goToVida(){
    this.navCtrl.push(VidaPage);
  }

  goToParticipacion(){
    this.navCtrl.push(ParticipacionPage);
  }

  goToCultura(){
    this.navCtrl.push(CulturaPage);
  }

  goToServicios(){
    this.navCtrl.push(ServiciosPage);
  }

  goToTrabajo(){
    this.navCtrl.push(TrabajoPage);
  }


}
