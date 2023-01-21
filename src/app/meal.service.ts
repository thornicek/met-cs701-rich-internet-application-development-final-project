import { Injectable } from '@angular/core';
import { Meal } from './meal';
// import { MEALS } from './mock-meals';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
 
  // URL to mock web api
  private mealsUrl = 'api/meals';  

  // header for http save requests
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  // fetch the array of objects from api 
  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.mealsUrl)
    .pipe(
      catchError(this.handleError<Meal[]>('getMeals', []))
    );
  }

  // get meal by id
  getMeal(id: number): Observable<Meal> {
    const url = `${this.mealsUrl}/${id}`;
  return this.http.get<Meal>(url).pipe(
    catchError(this.handleError<Meal>(`getMeal id=${id}`))
  );
  }

    /**
   * Handle Http operation that failed.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // console error
    console.error(error); 
    // console error message
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** PUT: update the meal on the server */
updateMeal(meal: Meal): Observable<any> {
  return this.http.put(this.mealsUrl, meal, this.httpOptions).pipe(
    catchError(this.handleError<any>('updateMeal'))
  );
}

/** POST: add a new meal to the server */
addMeal(meal: Meal): Observable<Meal> {
  return this.http.post<Meal>(this.mealsUrl, meal, this.httpOptions).pipe(
    catchError(this.handleError<Meal>('addMeal'))
  );
} 

/** DELETE: delete the meal from the server */
deleteMeal(id: number): Observable<Meal> {
  const url = `${this.mealsUrl}/${id}`;

  return this.http.delete<Meal>(url, this.httpOptions).pipe(
    catchError(this.handleError<Meal>('deleteMeal'))
  );
}


// goalCalories = 1;
// Provide a Subject to send the calorieGoal from one component to another
  // goalCount: BehaviorSubject<number>;
   


  constructor(
    private http: HttpClient,
    
  ) {
    // this.goalCount = new BehaviorSubject(this.goalCalories);
   }

//    changeGoal(goalCalories) {
//     return this.goalCount.next(goalCalories);
// }
}
