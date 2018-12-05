import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the OrganizationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrganizationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello OrganizationProvider Provider');
  }

  getOrganizations(baseUrl): Observable <any> {
    return this.http.get(baseUrl);
    //.catch((error: any) => Observable.throw(error.json().error || 'Server error getPlaces'));
  }

  getOrganizationeById(baseUrl, id): Observable<any> {
    return this.http.get(`${baseUrl}/organizations/${id}`);
    //.catch((error: any) => Observable.throw(error.json().error || 'Server error getPlaces'));
  }

}
