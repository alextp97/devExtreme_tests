import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private _http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  // Alta
  addCountry(formData: any): Observable<any> {
    return this._http.post(this.apiUrl, formData);
  }

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  getAllCountries(){
    const url = `${ this.apiUrl }/all`;    
    return this._http.get<Country[]>(url, { params: this.httpParams });
  }

  // Consulta

  // Modificación

  // Eliminación
}
