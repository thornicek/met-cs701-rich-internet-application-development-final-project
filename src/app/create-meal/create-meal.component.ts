import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
// import mock meals
import { MealService } from '../meal.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-create-meal',
  templateUrl: './create-meal.component.html',
  styleUrls: ['./create-meal.component.css']
})
export class CreateMealComponent implements OnInit {


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.mealService.addMeal({ name } as Meal)
      .subscribe(meal => {
        this.meals.push(meal);
      });
  }
  // expose Meals array for binding
  meals: Meal[] = [];

  getMeals(): void {
      this.mealService.getMeals()
      .subscribe(meals => this.meals = meals);
    }

    // return to previous page
    goBack(): void {
      this.location.back();
    }
  
    
  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

}
