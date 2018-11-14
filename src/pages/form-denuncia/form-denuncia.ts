import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormDenunciaSucesoPage } from '../form-denuncia-suceso/form-denuncia-suceso';


@Component({
  selector: 'page-form-denuncia',
  templateUrl: 'form-denuncia.html',
})

export class FormDenunciaPage {

  denunciaForm: FormGroup;

  validation_messages = {
      'email': [
        { type: 'required', message: 'El correo es requerido.' },
        { type: 'pattern', message: 'El formato no es válido' }
      ],
      'documentType': [
        { type: 'required', message: 'Debe escoger un tipo de documento' }
      ],
      'documentNumber': [
        { type: 'required', message: 'El número de documento es requerido' }
      ],
      'firstName': [
        { type: 'required', message: 'El nombre es requerido.' },
        { type: 'pattern', message: 'El formato no es válido' }
      ],
      'lastName': [
        { type: 'required', message: 'El apellido es requerido.' },
        { type: 'pattern', message: 'El formato no es válido' }
      ],
      'phone': [
        { type: 'required', message: 'El teléfono es requerido.' },
        { type: 'pattern', message: 'El formato no es válido' }
      ]
}

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.denunciaForm = this.formBuilder.group({
      email: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                              	])),

      documentType: new FormControl ('', Validators.required),

      documentNumber: new FormControl ('', Validators.required),

      firstName: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[a-zA-Z\s]*$')
                              	])),

      lastName: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[a-zA-Z\s]*$')
                              	])),

      phone: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[0-9]*$')
                              	]))
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormDenunciaPage');
  }

  goToFormDenunciaSuceso(){
    this.navCtrl.push(FormDenunciaSucesoPage);
  }

}
