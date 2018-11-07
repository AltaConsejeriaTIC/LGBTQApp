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
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ SMS, CallNumber ]
})
export class HomePage {
  @ViewChild('slides')
  slides: Slides;

  emergencyButtonActivate: boolean = false;
  activeMenu: string;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private sms: SMS,
    private callNumber: CallNumber,
    private storage: Storage) {

    }

  public innerWidth: any;
  public keyInfoContacts = 'infoContacts';
  public infoContacts = [];
  public idSet = new Set();
  public findContacts = false;
  public numberOfActiveContacts = 0;
  public keyEmergencyMessage = 'emergencyMessage';
  public emergencyMessage="";

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

  goToContactPage():void {
    this.navCtrl.push(ContactPage);
  }

  toggleEmergencyButton(fab: FabContainer):void {
    this.clearValues();
    this.loadInfo();
    if(this.emergencyButtonActivate) {
      fab.close();
    }else{
      fab.setActiveLists(true);
    }
    this.emergencyButtonActivate = !this.emergencyButtonActivate;
  }

  clearValues(){

    this.infoContacts = [];
    this.idSet = new Set();
    this.findContacts = false;
    this.numberOfActiveContacts = 0;
    this.emergencyMessage="";
  }

  callEmergency():void {
    this.callNumber.callNumber("123", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  sendEmergencySMS():void {

    for( let value of this.infoContacts){
      if( value.toggle ){
        let phoneNumber = value.data.phoneNumbers[0].value;
        phoneNumber = phoneNumber.replace(/\-/g,'');
        phoneNumber = phoneNumber.replace(/\s/g, '');
        phoneNumber = phoneNumber.replace(/[\])}[{(]/g, '')
        this.sms.send(`+57${phoneNumber}`, this.emergencyMessage);

      }
    }
  }

  loadInfo(){

    this.storage.get(this.keyEmergencyMessage).then((response) => {
      if( response){
        this.emergencyMessage = response;
      }
    });



    this.storage.get(this.keyInfoContacts).then((response) => {

      if( response ){
        for( let value of response){
          this.infoContacts.push( value );
          this.idSet.add( value.data.id );
          this.numberOfActiveContacts++;
        }
        this.findContacts = true;
      } else {
        this.findContacts = false;
      }
      console.log( 'after load infocontacts: ', this.infoContacts );
      console.log (' afeter load idSet: ', this.idSet );

    });



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
