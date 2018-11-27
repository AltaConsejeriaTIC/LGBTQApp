import { Component, ViewChild, HostListener } from '@angular/core';
import {NavController, Slides, ModalController, FabContainer} from 'ionic-angular';
import { ModalMenuPage } from '../modal-menu/modal-menu';
import { ListadoPage } from '../listado/listado';
import { DenunciaPage } from '../denuncia/denuncia';
import { DerechoPage } from '../derecho/derecho';
import { AlianzaPage } from '../alianza/alianza';
import { OrganizacionPage } from '../organizacion/organizacion';
import { ContactPage } from '../contact/contact';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
import { Storage } from '@ionic/storage';
import { timeout, TimeoutError } from 'promise-timeout';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ SMS, CallNumber ]
})
export class HomePage {
  @ViewChild('slides')
  slides: Slides;

  @ViewChild('fab')
  fab: FabContainer;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private sms: SMS,
    private callNumber: CallNumber,
    private storage: Storage,
    private androidPermissions: AndroidPermissions,
    public plt: Platform) {
      storage.get(this.keyFirstTimeUse).then(value => {
        this.firstTime = (value === null ? true : value);
      }).catch(err => {
        console.error("Error en constructor, storage.get", err, err.stack);
      });
    }

  public keyInfoContacts = 'infoContacts';
  public infoContacts = [];
  public idSet = new Set();
  public findContacts = false;
  public numberOfActiveContacts = 0;
  public keyEmergencyMessage = 'emergencyMessage';
  public keyFirstTimeUse = 'firstTimeUse';
  public emergencyMessage="";
  public messageHasBeenSend = false;
  public firstTime: boolean = true;
  public emergencyButtonActivate: boolean = false;
  public hasPressedSendMessage = false;
  public tutorialStep = 1;

  prevSlide() {
    if(this.emergencyButtonActivate) {
      this.fabClose();
    }else {
      this.slides.slidePrev();
    }
  }

  nextSlide() {
    if(this.emergencyButtonActivate) {
      this.fabClose();
    }else {
      this.slides.slideNext();
    }
  }

  goToListado() {
    this.goToPage(ListadoPage);
  }

  goToDenuncia() {
    this.goToPage(DenunciaPage);
  }

  goToDerecho() {
    this.goToPage(DerechoPage);
  }

  goToAlianza() {
    this.goToPage(AlianzaPage);
  }

  goToOrganizacion() {
    this.goToPage(OrganizacionPage);
  }

  goToContactPage():void {
    if(this.firstTime){
      this.storage.set(this.keyFirstTimeUse,false).catch(err => {
        console.error("Error en goToContactPage", err, err.stack);
      });
      this.firstTime = false;
      this.tutorialStep = -Infinity;
    }

    this.navCtrl.push(ContactPage).catch(err => {
      console.error("Error en goToContactPage", err, err.stack);
    });
  }

  goToPage(page) {
    if(!this.firstTime){
      if(this.emergencyButtonActivate) {
        this.fab.close();
        this.emergencyButtonActivate = false;
      }
      else{
        this.navCtrl.push(page).catch(err =>{
          console.error(err,err.stack);
        });
      }
    }
  }

  fabClose(){
      this.fab.close();
      this.emergencyButtonActivate = false;
  }

  toggleEmergencyButton():void {
    if(!this.firstTime || this.tutorialStep == 4){
      if(this.emergencyButtonActivate) {
        this.fab.close();
      }else{
        this.clearValues();
        this.loadInfo();
        setTimeout(function(fab){
          fab.setActiveLists(true);
        },0,this.fab)
      }
      if(this.firstTime){
        this.tutorialStep += 1;
        if (this.plt.is('android')) {
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
            result => console.log('Has permission?',result.hasPermission),
            err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
          );
        }
      }
      this.emergencyButtonActivate = !this.emergencyButtonActivate;

    }
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
      .catch(err => console.error('err launching dialer', err, err.stack));

  }

  sendEmergencySMS():void {

    this.hasPressedSendMessage = true;

    if( this.emergencyMessage ){
      // this.sms.hasPermission().then( ()=>{
      for( let value of this.infoContacts){
        if( value.toggle ){
          let phoneNumber = value.data.phoneNumbers[0].value;
          phoneNumber = phoneNumber.replace(/-/g,'');
          phoneNumber = phoneNumber.replace(/\s/g, '');
          phoneNumber = phoneNumber.replace(/[\])}[{(]/g, '');

          timeout(
            this.sms.send(`+57${phoneNumber}`, this.emergencyMessage).then( ()=>{
              this.messageHasBeenSend = true;
              this.hasPressedSendMessage = false;
              return true;
            }).catch(err =>{
              console.error(err,err.stack);
              this.hasPressedSendMessage = false;
              alert(' ocurrio un error al momento de enviar el mensaje');
              return false;
            }), 90000  ) //90 secs
            .then((thing) => console.log('I did a thing!'))
            .catch((err) => {
              if (err instanceof TimeoutError) {
                console.error('Timeout :-(');
                this.hasPressedSendMessage = false;
                alert( 'No se pudo enviar el mensaje');
              }
            });
        }
      }
    }
  }

  closeSendEmergencyMessage(){
    this.messageHasBeenSend = false;
    this.hasPressedSendMessage = false;
  }

  checkContactsAvailable(){

    let check : any;
    check = false;

    if( this.infoContacts.length === 0 ) return true;
    for( let value of this.infoContacts ){
      check |= value.toggle;
    }

    return !check;
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
    });



  }

  slideChanged() {
    this.slides.update();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.slideChanged();
  }

  openMenuModal(): void {
    if(this.emergencyButtonActivate){
      this.fabClose();
    }else {
      let myModal = this.modalCtrl.create(
        ModalMenuPage,
        {},
        {
          showBackdrop: false
        }
      );
      myModal.present().catch(err => {
        console.error("Error en openMenuModal", err, err.stack);
      });
    }
  }

  nextStepTutorial() {
    this.tutorialStep += 1;
    this.firstTime = this.tutorialStep < 7;
    console.log(this.tutorialStep)
  }

  disable(callback,condition){
    if(!condition){
      this[callback]();
    }
  }
}
