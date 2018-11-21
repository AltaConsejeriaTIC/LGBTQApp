import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ComplaintProvider {

  constructor(public http: HttpClient) { }

  postData(baseUrl, data){
    this.http.post(baseUrl, data, httpOptions)
      .subscribe(res => { console.log( res) }
      , err => { console.log(err)} );
  }

}
