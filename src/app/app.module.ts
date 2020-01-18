import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PhoneViewComponent } from './phone-view/phone-view.component';
import { PhoneAddComponent } from './phone-add/phone-add.component';
import { PhonesListComponent } from './phones-list/phones-list.component';
import { SortPhonesPipe } from './shared/pipes/sort-phones.pipe';
import { FilterPhonesTitlesPipe } from './shared/pipes/filter-phones-titles.pipe';
import { FilterPhonesArticlePipe } from './shared/pipes/filter-phones-article.pipe';
import { FilterPhonesManufactPipe } from './shared/pipes/filter-phones-manufact.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    PhoneViewComponent,
    PhoneAddComponent,
    PhonesListComponent,
    SortPhonesPipe,
    FilterPhonesTitlesPipe,
    FilterPhonesArticlePipe,
    FilterPhonesManufactPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
