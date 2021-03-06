import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {
  constructor(public http: HttpClient) {}

  getData(baseUrl): Observable<any> {
    return this.http.get(baseUrl);
    //.catch((error: any) => Observable.throw(error.json().error || 'Server error getPlaces'));
  }
  getEvent(baseUrl, id): Observable<any> {
    return this.http.get(`${baseUrl}/events/${id}`);
    //.catch((error: any) => Observable.throw(error.json().error || 'Server error getPlaces'));
  }
  getImage(baseUrl): Observable<any>{
    return this.http.get( baseUrl, {responseType: 'blob'})
  }
  get(baseUrl, typeEvent, id): Observable<any> {
    return this.http.get(`${baseUrl}/${typeEvent}/${id}`);
    //.catch((error: any) => Observable.throw(error.json().error || 'Server error getPlaces'));
  }
}
