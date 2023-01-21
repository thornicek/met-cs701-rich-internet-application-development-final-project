import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { EditMealsComponent } from './edit-meals/edit-meals.component';
import { CreateMealComponent } from './create-meal/create-meal.component';


const routes: Routes = [
  { path: 'addMeals', component: MealsComponent},
  { path: 'editMeals/:id', component: EditMealsComponent},
  { path: 'createMeals', component: CreateMealComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
