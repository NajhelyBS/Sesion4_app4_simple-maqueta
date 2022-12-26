import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainComponent } from './contain/contain.component';
import { Seccion1Module } from '../seccion1/seccion1.module';
import { Seccion2Module } from '../seccion2/seccion2.module';



@NgModule({
  declarations: [
    ContainComponent
  ],
  imports: [
    CommonModule,
    Seccion1Module,
    Seccion2Module,
 
  ],
  exports: [
    ContainComponent,
  ]
})
export class BodyModule { }
