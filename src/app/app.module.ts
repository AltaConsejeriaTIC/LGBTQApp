import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Deeplinks } from '@ionic-native/deeplinks'
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalMenuPage } from '../pages/modal-menu/modal-menu';
import { ListadoPage } from '../pages/listado/listado';
import { DerechoPage } from '../pages/derecho/derecho';
import { DenunciaPage } from '../pages/denuncia/denuncia';
import { AlianzaPage } from '../pages/alianza/alianza';
import { OrganizacionPage } from '../pages/organizacion/organizacion';

import { FormDenunciaPage } from '../pages/form-denuncia/form-denuncia';
import { FormDenunciaSucesoPage } from '../pages/form-denuncia-suceso/form-denuncia-suceso';

import { QuienesSomosPage } from '../pages/quienes-somos/quienes-somos';
import { FormularioPage } from '../pages/formulario/formulario';

import { FormCensoPage } from '../pages/form-censo/form-censo';

import {DiscriminacionPage} from '../pages/discriminacion/discriminacion';
import {ArcoirisPage} from '../pages/arcoiris/arcoiris';
import {PurpuraPage} from '../pages/purpura/purpura';

import {PoliticaPage} from '../pages/politica/politica';
import {LogrosPage} from '../pages/logros/logros';
import {PuntosPage} from '../pages/puntos/puntos';
import {AccesoDerechosPage} from '../pages/acceso-derechos/acceso-derechos';

import {EducacionPage} from '../pages/educacion/educacion';
import {SaludPage} from '../pages/salud/salud';
import {HabitatPage} from '../pages/habitat/habitat';
import {VidaPage} from '../pages/vida/vida';
import {ParticipacionPage} from '../pages/participacion/participacion';
import {CulturaPage} from '../pages/cultura/cultura';
import {ServiciosPage} from '../pages/servicios/servicios';
import {TrabajoPage} from '../pages/trabajo/trabajo';

import {ObjetivoPage} from '../pages/objetivo/objetivo';
import {CoordinaPage} from '../pages/coordina/coordina';

import { AlianzasAliadoPage } from '../pages/alianzas-aliado/alianzas-aliado';
import { OrganizacionAparecerPage } from '../pages/organizacion-aparecer/organizacion-aparecer';

import { DetailContentService } from '../services/detail-content.service';
import { EventProvider } from '../providers/event/event';
import { HttpClientModule } from '@angular/common/http';

import { CallNumber } from '@ionic-native/call-number';
//used to give format to date
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

import { Geolocation } from '@ionic-native/geolocation';
import { ContactPage } from '../pages/contact/contact';

import { Contacts } from '@ionic-native/contacts';
import { IonicStorageModule } from '@ionic/storage';
import { SMS } from '@ionic-native/sms';

import { ContentDetailModule } from '../pages/content-detail/content-detail.module';
import { ComplaintProvider } from '../providers/complaint/complaint';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalMenuPage,
    ListadoPage,
    DerechoPage,
    DenunciaPage,
    FormDenunciaPage,
    FormDenunciaSucesoPage,
    AlianzaPage,
    OrganizacionPage,
    QuienesSomosPage,
    FormularioPage,
    FormCensoPage,
    DiscriminacionPage,
    ArcoirisPage,
    PurpuraPage,
    ContactPage,
    PoliticaPage,
    PuntosPage,
    AccesoDerechosPage,
    LogrosPage,
    ObjetivoPage,
    CoordinaPage,
    EducacionPage,
    SaludPage,
    HabitatPage,
    VidaPage,
    ParticipacionPage,
    CulturaPage,
    ServiciosPage,
    TrabajoPage,
    LogrosPage,
    AlianzasAliadoPage,
    OrganizacionAparecerPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ContentDetailModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalMenuPage,
    ListadoPage,
    DerechoPage,
    DenunciaPage,
    FormDenunciaPage,
    FormDenunciaSucesoPage,
    AlianzaPage,
    OrganizacionPage,
    QuienesSomosPage,
    FormularioPage,
    FormCensoPage,
    DiscriminacionPage,
    ArcoirisPage,
    PurpuraPage,
    ContactPage,
    PoliticaPage,
    PuntosPage,
    AccesoDerechosPage,
    LogrosPage,
    ObjetivoPage,
    CoordinaPage,
    EducacionPage,
    SaludPage,
    HabitatPage,
    VidaPage,
    ParticipacionPage,
    CulturaPage,
    ServiciosPage,
    TrabajoPage,
    LogrosPage,
    AlianzasAliadoPage,
    OrganizacionAparecerPage
  ],
  providers: [
    StatusBar,
    SocialSharing,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    DetailContentService,
    EventProvider,
    CallNumber,
    Contacts,
    SMS,
    CallNumber,
    Deeplinks,
    InAppBrowser,
    ComplaintProvider
  ]
})
export class AppModule {}
