import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

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
  public nameContacts = [];
  public idSet = new Set();

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {
    if( this.nameContacts.length == 0 ){
      this.findContacts = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  addContact(){

    this.contacts.pickContact().then( response => {

      console.log('response: ', response );
      const infoContact = response['_objectInstance'];
      const name = infoContact.name.formatted;

      if( this.idSet.has( infoContact.id) ){
        alert("Este contacto ya se encuentra registrado");
      }
      else{
        this.idSet.add(infoContact.id);
        this.nameContacts.push( name );
      }

      console.log( 'info: ', infoContact );
      console.log('mame: ', name );
      this.findContacts = true;

    }).catch( (error)=>{
      alert('No Contacts found');
      console.log('error: ', error);
    });

  }

}
