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



  findContacts = false;
  nameContacts = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  addContact(){
    console.log( 'button is working');

    // let contact: Contact = this.contacts.create();

    // contact.pickContact().then( (response) =>{
    //     console.log('response: ', response);
    //     console.log( 'res json: ', JSON.stringify(response) );
    //   }
    // ).catch( (error: any) => { console.error('Error saving contact.', error) } );

    this.contacts.pickContact().then( response => {
      alert("INSIDE PROMISE")

      console.log('response: ', response );
      const infoContact = response['_objectInstance'];
      const name = infoContact.name.formatted;

      console.log( 'info: ', infoContact );
      console.log('mame: ', name );

      this.nameContacts.push( name );

      this.findContacts = true;

    }).catch( (error)=>{
      alert('No Contacts found');
      console.log('error: ', error);
    });

  }

}
