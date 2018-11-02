import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the FormCensoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form-censo',
  templateUrl: 'form-censo.html',
})
export class FormCensoPage {

  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.credentialsForm = this.formBuilder.group({
      email: [''],
      documentType: [''],
      firstName: [''],
      lastName: [''],
      address: [''],
      phone: [''],
      gender: [''],
      orientation: [''],
      identity: [''],
      age: ['']

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormCensoPage');
  }

  sendData(){

  }

}
