import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup } from '@angular/forms';
import { FormDenunciaPage } from '../form-denuncia/form-denuncia';

@Component({
  selector: 'page-form-denuncia-suceso',
  templateUrl: 'form-denuncia-suceso.html',
})
export class FormDenunciaSucesoPage {

  denunciaForm: FormGroup;
  modalWindow: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.denunciaForm = this.formBuilder.group({
      date: [''],
      place: [''],
      description: ['']

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ');
  }

sendData(){
    this.modalWindow=true;
  }

  closeData(){
      this.modalWindow=false;
    }

}
