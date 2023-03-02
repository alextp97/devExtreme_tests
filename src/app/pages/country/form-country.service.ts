import { Injectable } from '@angular/core';
import { formCountry } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import notify from 'devextreme/ui/notify';

@Injectable({
  providedIn: 'root'
})
export class FormCountryService {

  private urlCountry = 'http://localhost:3000';

  private subject = new Subject<void>();

  numberPattern = /^\d+$/;
  urlPattern = /(^[a-zñA-ZÑ]*:\/\/[a-zñA-ZÑ]*\.[a-zA-Z]*\/?[a-z0-9]*\/[a-z]*\.[a-z]{3})/;

  formCountry: formCountry = {
    id: 0,
    name: '',
    region: '',
    language: '',
    population: 0,
    urlFlag: '',
    notes: '',
  };
  constructor( private _http: HttpClient) { }

  //Envío el pais creado a la base de datos
  newCountry( country: formCountry): Observable<formCountry>{
    return this._http.post<formCountry>(`${this.urlCountry}/countries/`, country)
  }

  sendCountry(){
    this.subject.next();
  }

  //Obtengo todos los países de la base de datos
  getCountriesFromDB(): Observable<formCountry[]> {
    return this._http.get<formCountry[]>(`${this.urlCountry}/countries`)
  }

  //Borro el pais de la base de datos
  deleteCountry(id: number): Observable<any>{
    return this._http.delete<any>(`${this.urlCountry}/countries/${id}`)
  }

  updateCountry(dataCountry: formCountry): Observable<formCountry>{
    const countryId = dataCountry.id;
    return this._http.patch<formCountry>(`${this.urlCountry}/countries/${countryId}`, dataCountry);
  }


  //IMPLEMENTAR CUANDO SE TERMINE LA FUNCIONALIDAD GENERAL
  // showNotifyGeneric(message: string, positionNoti: { my: string, at: string }, severity: string, life: number) {
  //   let severityNotify = severity;
  //   let positionNotify = positionNoti;
  //   let msgNotify = message;
  //   let timeOnScreen = life;
  //   notify(
  //     {
  //       message: msgNotify,
  //       positionNotify,   
  //     },
  //     severityNotify,
  //     timeOnScreen
  //     );
  // }
}
