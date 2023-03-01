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
  data: boolean = false;

  constructor(private _countryService: FormCountryService) { }

  ngOnInit() {
      this.getAllCounties();

  }

  getAllCounties(){
    this._countryService.getCountriesFromDB().subscribe((listCountries: formCountry[]) => {
      this.countries = listCountries;
    });
  }

  countrySelected(event: any) {
    this.data = false; 
    const country = event.value;

    this.data = true;
  }

  updateCountryInfo(event: any) {
    this.data = false;

    let countryName = event.value;

    // this.arrayCountries.forEach((country) => {
    //   if (countryName === country.name) {
    //     this.country.name = country.name;
    //     this.country.region = country.region;
    //     this.country.language = country.language;
    //     this.country.population = country.population;
    //     this.country.urlFlag = country.urlFlag;
    //     this.country.description = country.description;

    //     this.data = true;
    //   }
    // });
  }

}
