import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormDenunciaSucesoPage } from '../form-denuncia-suceso/form-denuncia-suceso';
import { ComplaintProvider } from '../../providers/complaint/complaint';


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

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private formBuilder: FormBuilder,
               private complaintProvider: ComplaintProvider) {
    this.denunciaForm = this.formBuilder.group({
      email: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z-.]{2,}$')
                              	])),

      documentType: new FormControl ('', Validators.required),

      documentNumber: new FormControl ('', Validators.required),

      firstName: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[a-záéíóúñüçA-ZÁÉÍÓÚ´ÑÜÇ\\s]*$')
                              	])),

      lastName: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[a-záéíóúñüçA-ZÁÉÍÓÚ´ÑÜÇ\\s]*$')
                              	])),

      phone: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[0-9]*$')
                              	]))
    });

    complaintProvider.postData( 'http://localhost:8080/complaints',
    {
      "first_name": "andres",
      "last_name": "andres",
      "document_type": "cc",
      "document_number": "10000000",
      "email": "ALGO@gmail.com",
      "phone": "3150000000",
      "event_day": "2018-08-11",
      "event_place": "xxxxx",
      "description": "xxxxx"
    } );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormDenunciaPage');
  }

  goToFormDenunciaSuceso(){
    this.navCtrl.push(FormDenunciaSucesoPage);
  }

}
