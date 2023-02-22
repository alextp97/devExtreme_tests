import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { DxGalleryModule, DxPopupModule } from 'devextreme-angular';
import { PopupGalleryComponent } from './popups/popup-gallery/popup-gallery.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    PopupGalleryComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    DxPopupModule,
    DxGalleryModule
  ],
  providers: [
  ],
  exports: [
    PopupGalleryComponent,
    GalleryComponent
  ],
  bootstrap: [AppComponent]
})
export class ComponentModule { }
