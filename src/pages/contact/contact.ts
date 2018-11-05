import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { Storage } from '@ionic/storage';
import {Platform} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [SocialSharing ]
})
export class ContactPage {



  public findContacts = false;
  public infoContacts = [];
  public idSet = new Set();
  public keyInfoContacts = 'infoContacts';
  public keyEmergencyMessage = 'emergencyMessage';
  public keyIdSet = 'idSet';
  public emergencyMessage="";
  public isTextOff = true;
  public isEditOn = false;
  public numberOfActiveContacts = 0;
  public deviceHeight = '0px';
  public isDeleteModalOn = false;
  public idToBeDeleted = 0;

  public proofArr = ['ANDRES VARGAS', 'BBB BBB', 'CCC CCC', 'DDD DDD', 'EEE EEE', 'FFF FF', 'ZZZ ZZZ', 'TTT TTT', 'GGG GGG', 'III III', 'OOO OOO', 'PPP PPP'];
  // public proofArr = ['AAA AAA'];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private contacts: Contacts, 
              private storage: Storage, 
              private platform: Platform, 
              public modalCtrl: ModalController,
              private socialSharing: SocialSharing ) {
    this.loadInfo();
    // console.log('Width: ' + platform.width());
    // console.log('Height: ' +  platform.height() );
    this.deviceHeight = platform.height()+'px';
  }


  loadInfo(){

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

    this.storage.get(this.keyEmergencyMessage).then((response) => {
      console.log('printing emergency message: ', response);
      if( response){
        this.emergencyMessage = response;
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');

  }

  addContact(){


    this.contacts.pickContact().then( response => {

      //alert("inside picking contacts");

      const infoContact = response['_objectInstance'];

      if(  this.idSet.size >0 && this.idSet.has( infoContact.id) ){
        alert("Este contacto ya se encuentra registrado");
      }
      else{
        this.idSet.add(infoContact.id);
        this.infoContacts.push(
          {
            data: infoContact,
            toggle: true
          }
        );
        this.numberOfActiveContacts++;
      }

      this.saveDataOnCellphone();

    }).catch( (error)=>{
      // alert('No Contacts found');
      console.log('error: ', error);
    });

  }

  clearAllContacts(){
    this.storage.clear();
    this.findContacts = false;
    this.infoContacts = [];
    this.idSet = new Set();
    this.numberOfActiveContacts = 0;
  }

  onChange( id, toggleValue){
    for( let value of this.infoContacts ){
      if( value.data.id === id){
        value.toggle = toggleValue;
        this.saveDataOnCellphone();
        break;
      }
    }
  }

  getIniNames( nameContact ){

    let finalIni = '';
    const nameArray = nameContact.split(' ');
    for( let name of nameArray){
      finalIni += name.charAt(0);
    }
    return finalIni.substring(0,( nameArray.length > 2 ? 2 : nameArray.length ) ).toUpperCase();
  }

  saveDataOnCellphone(){
    this.findContacts = true;
    this.storage.set( this.keyInfoContacts , this.infoContacts);
  }

  itemSelected( item ){  }

  clickOnEdit(){

    this.isTextOff = false;
    this.isEditOn = true;

  }

  clickOnSave(){
    this.isTextOff = true;
    this.isEditOn = false;
    this.storage.set( this.keyEmergencyMessage, this.emergencyMessage );
  }

  clickOnDelete(){
    this.emergencyMessage="";
  }

  clickOnDeleteContact(  ){
    const id = this.idToBeDeleted;
    this.numberOfActiveContacts--;
    let newContactsArray = [];
    this.idSet = new Set();
    for( let value of this.infoContacts){
      if( value.data.id != id ){
        newContactsArray.push( value );
        this.idSet.add( value.data.id );
      }
    }
    this.infoContacts = newContactsArray;
    this.saveDataOnCellphone();
    this.isDeleteModalOn = false;

  }

  getHeightDevice(){
    return this.platform.height();
  }

  openDeleteContactModal( id ){
    this.isDeleteModalOn = true;
    this.idToBeDeleted = id;
  }

  clickOnCancelDeleteContact(){
    this.isDeleteModalOn = false;
    this.idToBeDeleted = 0;
  }

  sendWhatsAppEmergencyMessage(){
  
    this.socialSharing.shareViaWhatsAppToReceiver( '+57 3012282987', 'H014 m0nd0' ).then(() => {
      alert('mensaje enviado con exito');
    }).catch(() => {
      alert('error enviado el mensaje');
    });

    
  }

}
