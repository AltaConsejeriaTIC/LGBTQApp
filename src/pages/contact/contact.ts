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

    let contactsfound
    this.contacts.pickContact().then((contacts) => {
      alert("INSIDE PROMISE")
      contactsfound = contacts;
      console.log('response: ',contacts );
      console.log('json: ', JSON.stringify(contacts) );
    })

    if (contactsfound.length == 0)
      alert('No Contacts found');

  }

}
