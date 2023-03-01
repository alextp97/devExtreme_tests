import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { DxGalleryModule, DxPopupModule, DxLoadPanelModule } from 'devextreme-angular';
import { PopupGalleryComponent } from './popups/popup-gallery/popup-gallery.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    PopupGalleryComponent,
    GalleryComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    DxPopupModule,
    DxGalleryModule,
    DxLoadPanelModule
  ],
  providers: [
  ],
  exports: [
    PopupGalleryComponent,
    GalleryComponent,
    SpinnerComponent
  ],
  bootstrap: [AppComponent]
})
export class ComponentModule { }
