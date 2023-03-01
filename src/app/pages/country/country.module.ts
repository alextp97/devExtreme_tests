import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { AddComponent } from './add/add.component';
import { DxAutocompleteModule, DxButtonModule, DxFormModule, DxLoadPanelModule, DxNumberBoxModule, DxSelectBoxModule, DxTextAreaModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultComponent } from './consult/consult.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AddComponent,
    ConsultComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DxFormModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    DxTextAreaModule,
    DxValidatorModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxLoadPanelModule
  ]
})
export class CountryModule { }
