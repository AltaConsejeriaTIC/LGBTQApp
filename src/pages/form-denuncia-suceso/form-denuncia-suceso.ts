import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-form-denuncia-suceso',
  templateUrl: 'form-denuncia-suceso.html',
})
export class FormDenunciaSucesoPage {

  denunciaForm: FormGroup;
  modalWindow: boolean = false;

  validation_messages = {

      'date': [
        { type: 'required', message: 'Debe seleccionar una fecha' }
      ],
      'place': [
        { type: 'required', message: 'El lugar del suceso es requerido' }
      ],
      'description': [
        { type: 'required', message: 'La descripción no puede ser vacía' }
      ]
  };

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
      this.navCtrl.setRoot(HomePage).catch(err => {
        console.error("Error en closeData", err, err.stack);
      });
      this.navCtrl.popToRoot().catch(err => {
        console.error("Error en closeData", err, err.stack);
      });
    }

}
