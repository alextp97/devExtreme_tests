import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private _http: HttpClient) {}

  url: string = environment.url;

  // Alta
  addCountry(formData: any): Observable<any> {
    return this._http.post(this.url, formData);
  }

  // Listado
  getListCountries(): Observable<any> {
    return this._http.get(this.url);
  }

  // Consulta

  // Modificación

  // Eliminación
}
