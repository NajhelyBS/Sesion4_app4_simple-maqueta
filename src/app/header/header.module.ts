import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { ItemsComponent } from '../nav/items/items.component';
import { NavModule } from '../nav/nav.module';



@NgModule({
  declarations: [
    TituloComponent
  ],
  imports: [
    CommonModule,
    NavModule,
  ],
  exports: [
    TituloComponent
  ],
})
export class HeaderModule { }
