import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import notify from 'devextreme/ui/notify';
import { CountryService } from '../country.service';
import { ICountry } from '../list/config';
import { FormCountryService } from '../form-country.service';
import { Country, formCountry } from '../../interfaces/country.interface';
import { DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  @ViewChild(DxFormComponent, { static: false }) form!:DxFormComponent;
  // addFormCountry!: FormGroup;
  addCountry!: formCountry;
  numberPattern = /^\d+$/;
  urlPattern =
    /(^[a-zñA-ZÑ]*:\/\/[a-zñA-ZÑ]*\.[a-zA-Z]*\/?[a-z0-9]*\/[a-z]*\.[a-z]{3})/;

  constructor(
    private _builder: FormBuilder,
    private _countryService: CountryService,
    private _formCountryService: FormCountryService
  ) {}

  ngOnInit() {
    
  }

  submitButtonOptions = {
    text: "Submit the Form",
    useSubmitBehavior: true
}
  submit() {
    this._formCountryService.newCountry(this.form.formData).subscribe(() => 
      this._formCountryService.sendCountry());
  }

  clear() {
    
  }
}
