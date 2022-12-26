import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainComponent } from './body/contain/contain.component';
import { EndComponent } from './footer/end/end.component';
import { TituloComponent } from './header/titulo/titulo.component';
import { ItemsComponent } from './nav/items/items.component';

const routes: Routes = [
  {path: "titulo", component: TituloComponent},
  {path: "contain", component: ContainComponent},
  {path:"end", component: EndComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
