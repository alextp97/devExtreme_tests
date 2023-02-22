import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { ICountry } from './config';

interface IObjCarousel {
  imageSrc: string | undefined;
  text: string;
}

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  arrayCountries: ICountry[] = [];
  arrayFlags: IObjCarousel[] = [];
  rowIndex: number = 0;
  visible: boolean = false;

  carrouselFlags: IObjCarousel = {
    imageSrc: '',
    text: '',
  };

  constructor(private countryService: CountryService) {
    this.countryService.getListCountries().subscribe((countryList) => {
      this.arrayCountries = countryList;

      this.arrayCountries.map((country: ICountry) => {
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

  openPopup(event: any) {
    // Si se hace click sobre una de las banderas
    if (event.rowType == 'data' && event.columnIndex === 4) {
      this.visible = !this.visible; // Popup visible
      this.rowIndex = event.rowIndex; // Obtención del índice de la fila seleccionada para abrir el popup mostrando la bandera actual
    }
  }

  getPropVisible(event: any) {
    this.visible = event;
  }

  allowDeleting() {
    // Petición DELETE a back
    //return !AppComponent.isChief(e.row.data.Position);
  }
}
