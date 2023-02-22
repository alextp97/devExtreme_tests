import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../country.service';

interface IObjCarousel {
  imageSrc: string | undefined;
  text: string;
}

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  countries: Country[] = [];

  arrayFlags: IObjCarousel[] = [];
  rowIndex: number = 0;
  visible: boolean = false;

  carrouselFlags: IObjCarousel = {
    imageSrc: '',
    text: '',
  };

  constructor(private countryService: CountryService) {

    this.countryService.getAllCountries().subscribe((countryList: Country[]) => {
      countryList.map((country: Country) => {
        // Info para el carrousel de imágenes
        this.carrouselFlags.text = country.name;
        this.carrouselFlags.imageSrc = country.flag;

        this.arrayFlags.push({
          text: this.carrouselFlags.text,
          imageSrc: this.carrouselFlags.imageSrc,
        });
      });
    });
  }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((resp: Country[]) => {
      this.countries = resp;
    });
  }

  openPopup(event: any) {
    // Si se hace click sobre una de las banderas
    if (event.rowType == 'data' && event.column.caption === 'Flag') {
      this.visible = !this.visible; // Popup visible
      this.rowIndex = this.dataGrid.instance.pageIndex() * this.dataGrid.instance.pageSize() + event.rowIndex; // Obtención del índice de la fila seleccionada para abrir el popup mostrando la bandera actual
    }
  }

  getPropVisible(event: any) {
    this.visible = event;
  }

  allowDeleting() {
    // Petición DELETE a back
    //return !AppComponent.isChief(e.row.data.Position);
  }

  onExporting(event: any){
  }



}
