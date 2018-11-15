import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormDenunciaPage } from '../form-denuncia/form-denuncia';

@Component({
  selector: 'page-form-denuncia-suceso',
  templateUrl: 'form-denuncia-suceso.html',
})
export class FormDenunciaSucesoPage {

  denunciaForm: FormGroup;
  modalWindow: boolean = false;

  validation_messages = {

      'date': [
        { type: 'required', message: 'Debe escoger un tipo de documento' }
      ],
      'place': [
        { type: 'required', message: 'El número de documento es requerido' }
      ],
      'description': [
        { type: 'required', message: 'El nombre es requerido.' }
      ]
}

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.denunciaForm = this.formBuilder.group({
      date: new FormControl ('', Validators.required),
      place: new FormControl ('', Validators.required),
      description: new FormControl ('', Validators.required)

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
