import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Contacts} from '@ionic-native/contacts';
import { Storage } from '@ionic/storage';
import {Platform} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';

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
  providers: [SocialSharing , SMS, CallNumber ]
})
export class ContactPage {
  public findContacts = false;
  public infoContacts = [];
  public idSet = new Set();
  public keyInfoContacts = 'infoContacts';
  public keyEmergencyMessage = 'emergencyMessage';
  public emergencyMessage="";
  public isTextOff = true;
  public isEditOn = false;
  public numberOfActiveContacts = 0;
  public deviceHeight = '0px';
  public isDeleteModalOn = false;
  public idToBeDeleted = 0;

  // public proofArr = ['andres vargas', 'andres vargas', 'andres vargas', 'andres vargas'];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private contacts: Contacts,
              private storage: Storage,
              private platform: Platform) {
    this.loadInfo();
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
        console.log( this.infoContacts );
        this.findContacts = true;
      } else {
        this.findContacts = false;
      }
    });

    this.storage.get(this.keyEmergencyMessage).then((response) => {
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
        console.log( this.infoContacts );
        this.numberOfActiveContacts++;
      }

      this.saveDataOnCellphone();

    }).catch( (error)=>{
      // alert('No Contacts found');
      console.log('error: ', error);
    });

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

  getIniNames( nameContact , phoneNumber ){

    const display = nameContact ? nameContact : phoneNumber;
    let finalIni = '';
    const nameArray = display.split(' ');
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
  openDeleteContactModal( id ){
    this.isDeleteModalOn = true;
    this.idToBeDeleted = id;
  }

  clickOnCancelDeleteContact(){
    this.isDeleteModalOn = false;
    this.idToBeDeleted = 0;
  }
}
