import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DogFactsComponent } from './dog-facts/dog-facts.component';
import { ConsignaComponent } from './consigna/consigna.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dogfacts', component: DogFactsComponent},
  {path: 'consigna', component: ConsignaComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
