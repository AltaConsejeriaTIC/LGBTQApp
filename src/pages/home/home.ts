import { Component, ViewChild, HostListener } from '@angular/core';
import {NavController, Slides, ModalController, FabContainer} from 'ionic-angular';
import { ModalMenuPage } from '../modal-menu/modal-menu';
import { ModalSpeedDialPage } from '../modal-speed-dial/modal-speed-dial';
import { ListadoPage } from '../listado/listado';
import { DenunciaPage } from '../denuncia/denuncia';
import { DerechoPage } from '../derecho/derecho';
import { AlianzaPage } from '../alianza/alianza';
import { OrganizacionPage } from '../organizacion/organizacion';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slides')
  slides: Slides;

  panicBackground: boolean = false;
  activeMenu: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  public innerWidth: any;

  myParam = '';

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  prevSlide() {
    this.slides.slidePrev();
  }

  nextSlide() {
    this.slides.slideNext();
  }

  goToListado() {
    this.navCtrl.push(ListadoPage);
  }

  goToDenuncia() {
    this.navCtrl.push(DenunciaPage);
  }

  goToDerecho() {
    this.navCtrl.push(DerechoPage);
  }

  goToAlianza() {
    this.navCtrl.push(AlianzaPage);
  }

  goToOrganizacion() {
    this.navCtrl.push(OrganizacionPage);
  }

  goToContactPage(fab: FabContainer):void {
    if(this.panicBackground) {
      fab.close();
    }else{
      fab.setActiveLists(true);
    }

    this.panicBackground = !this.panicBackground;
    // let myModal = this.modalCtrl.create(
    //   ModalSpeedDialPage,
    //   {},
    //   {
    //     showBackdrop: false
    //   }
    // );
    // myModal.present();
  }

  slideChanged() {
    this.slides.update();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.slideChanged();
  }

  openMenuModal(): void {
    let myModal = this.modalCtrl.create(
      ModalMenuPage,
      {},
      {
        showBackdrop: false
      }
    );
    myModal.present();
  }

  hidePanicBackground(): void{
    //this.panicBackground = false;
  }
}
