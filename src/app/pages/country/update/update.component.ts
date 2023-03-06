import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import notify from 'devextreme/ui/notify';
import { formCountry } from '../../interfaces/country.interface';
import { FormCountryService } from '../form-country.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
 // Propiedades para la consulta
 visible: boolean = false;
 data!: boolean;
 arrayCountries: formCountry[] = [];
 country: formCountry = {
   id: 0,
   name: '',
   region: '',
   language: '',
   population: 0,
   notes: '',
   urlFlag: '',
 };

 // Propiedades para el formulario
 updatingFormCountry!: FormGroup;
 numberPattern = /^\d+$/;
 urlPattern =
   /(^[a-zñA-ZÑ]*:\/\/[a-zñA-ZÑ]*\.[a-zA-Z]*\/?[a-z0-9]*\/[a-z]*\.[a-z]{3})/;

 constructor(private _countryService: FormCountryService, private _builder: FormBuilder) { }

 ngOnInit(): void {
   this.getAllCountries();

   this.updatingFormCountry = this._builder.group({
     id: [],
     name: ['', [Validators.required]],
     region: ['', [Validators.required]],
     language: ['', [Validators.required]],
     population: [
       '',
       [Validators.required, Validators.pattern(this.numberPattern)],
     ],
     urlFlag: ['', [Validators.pattern(this.urlPattern)]],
     description: ['', []],
   });
 }

 getAllCountries() {

  this.arrayCountries = [];
   this._countryService
     .getCountriesFromDB()
     .subscribe((countries: formCountry[]) => {
       countries.forEach((country: formCountry) => {
         this.arrayCountries.push(country);
       });
     });
 }

 updateCountryInfo(event: any) {
   this.data = false;

   let countryName = event.value;

   this.arrayCountries.forEach((country) => {
     if (countryName === country.name) {
       setTimeout(() => {
         this.country.id = country.id;
         this.country.name = country.name;
         this.country.region = country.region;
         this.country.language = country.language;
         this.country.population = country.population;
         this.country.urlFlag = country.urlFlag;
         this.country.notes = country.notes;
       }, 1);

       this.data = true;
     }
   });
 }

  async submit(idCountry: number) {
   if (this.updatingFormCountry.invalid) {
     return;
   } else {
    this.visible = !this.visible;

    // ENVIAR DATOS A BACK
    const dataForm: formCountry = this.updatingFormCountry.value;

    //Asignamos el idCountry al dataForm.id para que se pueda actualizar correctamente el formulario
    dataForm.id = idCountry;
     
    await this._countryService.updateCountry(dataForm).subscribe(
      () => {
        this.visible = !this.visible;
        this.getAllCountries();
         notify(
           {
             message: 'You have submitted the form',
             position: {
               my: 'center top',
               at: 'center top',
             },
           },
           'success',
           3000
         );

       },
       (error) => {
         notify(
           {
             message: 'It has been a problem with the form',
             position: {
               my: 'center top',
               at: 'center top',
             },
           },
           'error',
           3000
         );
       }
     );
   }
 }

 clear() {
  this.updatingFormCountry.reset();
 }

 getPropVisible(event: any) { 
  this.visible = event;
}
}
