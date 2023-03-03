import { Component, OnInit } from '@angular/core';
import { formCountry } from '../../interfaces/country.interface';
import { FormCountryService } from '../form-country.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {

  countries: formCountry[] = [];
  fieldCountry: formCountry = {
    id: 0,
    name: '',
    region: '',
    population: 0,
    language: '',
    urlFlag: '',
    notes: ''
  };
  data: boolean = false;
  loadSpinner: boolean = false;

  constructor(private _countryService: FormCountryService) { }

  async ngOnInit() {
    this.countries = await this.getAllCounties();

  }

 getAllCounties(): Promise<formCountry[]> {
  this.loadSpinner = true;

    return new Promise(resolve => {
      setTimeout(() => {
        this._countryService.getCountriesFromDB().subscribe((listCountries: formCountry[]) => {
          resolve(listCountries);
        });
        this.loadSpinner = false;
      }, 1500);
    });
  }

  selectedCountry(event: any){ 
    this.data = false;
    const dataCountry = event.value;
    
    if(dataCountry){
      this.loadSpinner = true;
      setTimeout(() => {
        
        this.fieldCountry.name = dataCountry.name;
        this.fieldCountry.region = dataCountry.region;
        this.fieldCountry.population = dataCountry.population;
        this.fieldCountry.language = dataCountry.language;
        this.fieldCountry.urlFlag = dataCountry.urlFlag;
        this.fieldCountry.notes = dataCountry.notes;
        this.loadSpinner = false;
      }, 500);

      this.data = true;
    }
  }

  getPropVisible(event: any) { 
    this.loadSpinner = event;
  }
}
