import { Component, ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';

import { HomePage } from '../pages/home/home';
import { ListadoPage } from '../pages/listado/listado';
import { ContentDetailPage } from '../pages/content-detail/content-detail';
import { QuienesSomosPage } from '../pages/quienes-somos/quienes-somos';
import {Firebase} from "@ionic-native/firebase";
import {HttpClient} from "@angular/common/http";

import {ENV} from "../env";

const TOKEN_KEY = "dds-token";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) navChild:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public deeplinks: Deeplinks, firebase: Firebase,public http: HttpClient) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      let token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        firebase.getToken().then(token => {
          this.http.get(ENV.endpoint+"/token/" + token).subscribe(value => {
            localStorage.setItem(TOKEN_KEY, token);
            console.log(value);
          });
        }).catch(err => console.log(err));
      }
      firebase.onNotificationOpen().subscribe(data=>{
        //When the uses clicks on the notification something
        console.log(data);
      }, err=> console.log(err));

      this.deeplinks.routeWithNavController(this.navChild, {
        '/test': ListadoPage,
        '/content/:id': ContentDetailPage,
        '/quien': QuienesSomosPage
      }).subscribe((match) => {
        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.log('Unmatched Route', nomatch);
      });
    });
  }
}

