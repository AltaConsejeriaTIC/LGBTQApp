import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the AllianceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AllianceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AllianceProvider Provider');
  }

  getAlliances(baseUrl): Observable<any> {
    return this.http.get(baseUrl);
    //.catch((error: any) => Observable.throw(error.json().error || 'Server error getPlaces'));
  }

  getAllianceById(baseUrl, id): Observable<any> {
    return this.http.get(`${baseUrl}/alliance/${id}`);
    //.catch((error: any) => Observable.throw(error.json().error || 'Server error getPlaces'));
  }

}
