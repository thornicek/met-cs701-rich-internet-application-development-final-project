import { Component, OnInit} from '@angular/core';
// import { MealService } from '../meal.service'; 

import { Goals } from '../goals';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  title = 'Meal Plan Calculator';

  goals: Goals[];
  goalSelected: number;
  calorieGoal;
 
  caloriesMP:number;

  constructor(
    // private mealService: MealService,
    ) {
   }

  ngOnInit() {
    // define the dropdown object
    this.goals = [
      { Id: 1, Name: "Lose Weight", CalorieGoal: 1700},
      { Id: 2, Name: "Mantain Current Weight", CalorieGoal: 2200},
      { Id: 3, Name: "Gain Weight", CalorieGoal: 2700}

    ];
    this.getData();
  


  }
  // when a goal is selected
  onGoalSelected( val: number ){
    val = Number(val)
    return val
  }

  // retreive data from local storage, if empty assign 0
  getData(){
  
     if (localStorage != null && localStorage.getItem('totalCalories') != null) {
      this.caloriesMP = Number(localStorage.getItem('totalCalories'));
    } else this.caloriesMP = 0;

    }
 }

 



