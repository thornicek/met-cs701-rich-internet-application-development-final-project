import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Meal } from './meal';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const meals = [
      {id: 1, name: "Chicken Noodle Soup", protein: 6, fats: 2.9, carbohydrates: 8, fiber: 0, calories: 87}, 
      {id: 2, name: "Mac and Cheese", protein: 13, fats: 9, carbohydrates: 44, fiber: 2.3, calories: 310}, 
      {id: 3, name: "Spaghetti Bolognese", protein: 16, fats: 6, carbohydrates: 47, fiber: 8, calories: 297}, 
      {id: 4, name: "Rib Eye Steak", protein: 24, fats: 22, carbohydrates: 0, fiber: 0, calories: 291}
  ];
    return {meals};
  }

  // Overrides the genId method to ensure that a meal always has an id.
  // If the meals array is empty,
  // the method below returns the initial number (5).
  // if the meals array is not empty, the method below returns the highest
  // meal id + 1.
  genId(meals: Meal[]): number {
    return meals.length > 0 ? Math.max(...meals.map(meal => meal.id)) + 1 : 5;
  }
}