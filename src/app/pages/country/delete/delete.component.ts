import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Country, formCountry } from '../../interfaces/country.interface';
import { CountryService } from '../country.service';
import { FormCountryService } from '../form-country.service';

interface IObjCarousel {
  imageSrc: string | undefined;
  text: string;
}

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  countries: formCountry[] = [];

  arrayFlags: IObjCarousel[] = [];
  rowIndex: number = 0;
  visible: boolean = false;

  carrouselFlags: IObjCarousel = {
    imageSrc: '',
    text: '',
  };

  constructor(private formCountry: FormCountryService) {

    this.formCountry.getCountriesFromDB().subscribe((countryList: formCountry[]) => {
      countryList.map((country: formCountry) => {
        // Info para el carrousel de imágenes
        this.carrouselFlags.text = country.name;
        this.carrouselFlags.imageSrc = country.urlFlag;

        this.arrayFlags.push({
          text: this.carrouselFlags.text,
          imageSrc: this.carrouselFlags.imageSrc,
        });
      });
    });
  }

  ngOnInit(): void {
    this.getAllCounties();
  }

  getAllCounties(){
    this.formCountry.getCountriesFromDB().subscribe((listCountries: formCountry[]) => {
      this.countries = listCountries;
    });
  }

  openPopup(event: any) {
    // Si se hace click sobre una de las banderas
    if (event.rowType == 'data' && event.column.caption === 'Url Flag') {
      this.visible = !this.visible; // Popup visible
      this.rowIndex = this.dataGrid.instance.pageIndex() * this.dataGrid.instance.pageSize() + event.rowIndex; // Obtención del índice de la fila seleccionada para abrir el popup mostrando la bandera actual
    }
  }

  getPropVisible(event: any) {
    this.visible = event;
  }

  onExporting(event: any){
  }

  getId(id: number){
    this.formCountry.deleteCountry(id).subscribe(() =>
      this.getAllCounties())
   }
}
