import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { Storage } from '@ionic/storage';

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
})
export class ContactPage {



  public findContacts = false;
  public infoContacts = [];
  public idSet = new Set();
  public keyInfoContacts = 'infoContacts';
  public keyIdSet = 'idSet';

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts, private storage: Storage) {
    this.loadInfo();
  }

  loadInfo(){

    this.storage.get(this.keyInfoContacts).then((response) => {

      if( response ){
        for( let value of response){
          this.infoContacts.push( value );
          this.idSet.add( value.id );
        }
        this.findContacts = true;
      } else {
        this.findContacts = false;
      }
      console.log( 'after load infocontacts: ', this.infoContacts );
      console.log (' afeter load idSet: ', this.idSet );

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  addContact(){


    this.contacts.pickContact().then( response => {

      alert("inside picking contacts");

      const infoContact = response['_objectInstance'];

      if(  this.idSet.size >0 && this.idSet.has( infoContact.id) ){
        alert("Este contacto ya se encuentra registrado");
      }
      else{
        this.idSet.add(infoContact.id);
        this.infoContacts.push( infoContact );
      }

      this.findContacts = true;
      this.storage.set( this.keyInfoContacts , this.infoContacts);

    }).catch( (error)=>{
      alert('No Contacts found');
      console.log('error: ', error);
    });

  }

  clearAllContacts(){
    this.storage.clear();
    this.findContacts = false;
    this.infoContacts = [];
    this.idSet = new Set();
  }

}
