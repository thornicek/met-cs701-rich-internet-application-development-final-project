import { Component, OnInit } from '@angular/core';
// import the meal interface
import { Meal } from '../meal';
// import mock meals
import { MealService } from '../meal.service';
import { PLANNED } from '../droppedMeals';
// import Drag and Drop
import { moveItemInArray,copyArrayItem} from '@angular/cdk/drag-drop';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  

  sum;
  subscription: Subscription;
  calorieGoal;

  // Save data to local storage 
  saveData(){
    localStorage.setItem('totalCalories', this.sum);
    
  }

    // retreive data from local storage 
    getData(){
      this.sum = localStorage.getItem('totalCalories');
      this.sum = Number(this.sum);
      return this.sum 
    }



  // remove data, based on key, from local storage
  removeData(){
    localStorage.removeItem('totalCalories');
  }
  event;
  // Drag and Drop, on drop event
  drop(event) {
    
    var calories = event.previousContainer.data[event.previousIndex]['calories'];
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.id === 'planned') {
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
          // everytime an event is dropped, call getTotal function 
          // to generate the sum of calories of objects that have been
          // dropped
          this.getTotal(calories);
         
         
      } else {
        this.planned.splice(event.previousIndex, 1);
        this.getTotal(calories);
        
      }
      
    
  }

 // helper function to calculate the total calories in a Meal Plan and save them to local storage
  getTotal(calories){
   this.sum = this.planned.reduce((sum, current) => sum + current.calories, 0);
   this.saveData();
   
   return this.sum;
  }

  // initialize array for the target drop location
  planned = PLANNED;

  // expose Meals array for binding
  meals: Meal[] = [];

  getMeals(): void {
    this.mealService.getMeals()
    .subscribe(meals => this.meals = meals);
  }

  goBack(): void {
    this.location.back();
  }

  delete(meal: Meal): void {
    this.meals = this.meals.filter(m => m !== meal);
    this.mealService.deleteMeal(meal.id).subscribe();
  }
  
  // retreive the meal object array
  ngOnInit(): void {
    this.getMeals();
  
  // this.subscription = this.mealService.currentGoal.subscribe(calorieSet => this.calorieGoal = calorieSet)
  }

  constructor(
    private mealService: MealService,
    private location: Location,
    ) { }

 

}
