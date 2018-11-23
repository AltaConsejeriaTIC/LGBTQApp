import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ComplaintProvider {

  constructor(public http: HttpClient) { }

  postData(baseUrl, data){
    return this.http.post(baseUrl, data, httpOptions);
  }

}
