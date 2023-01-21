# mealPlanCalculator
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

The goal of my application is for it to be used as a meal scheduling application, for people that are looking to lose/gain weight.

# install in memory API
npm install angular-in-memory-web-api --save

# packages to download
In order to run the Meal Plan Calculator, install the following packages to your system

# install angular/cli package globally, to start using angular
@angular/cli -> npm install -g @angular/cli 

# install node modules
npm install

# install angular/core package for basic features of angular
@angular/core -> npm install @angular/core

# install angular/cdk in project for drag and drop
@angular/cdk/drag-drop -> npm install @angular/cdk/drag-drop

# install angular/router for navigation between different components of the app
@angular/router -> npm install @angular/router

# install angular/common in order to get location and enable the "back" button to work
@angular/common -> npm install @angular/common 

# install in memory web api to simulate the server
npm install angular-in-memory-web-api --save

# install rxjs to implement and work with observable type
rxjs -> npm i rxjs

# Layout
My angular app consists of 4 components (+ app.component):
# app.component.html
The app component has the dropdown component present at all times and has the routeroutlet beneath. The router outlet changes 
between components based upon the selectionfrom the dropdown
# 1
dropdown component -> this component is present at all times. The component consists of a nav bar, that includes button that navigate 
to different components. The nav bar also includes a dropdown, where the user selects their goal: lose/mantain/gain weight. Based on the
users selection "your selected goal" and "your calories remaining for the day" changes dynamically.
# 2
create-meal component -> This component is triggered, when the user selects the "Add a new Meal" navigation item in the nav bar. In this component the user creates a meal, which is "subscribed" by the mealService and the meals database gets updated to include the newly created meal with no values for other properties but the name and the id. The id gets generated once the meal is created.
# 3 
meals component -> This component is triggered by selecting the "Build your Meal Plan" navigation item in the nav bar. This component consists of two 2 divs, one is the source div, with all the default/edited/created meals, and one is the target div, where the user drags and drops the meals, which he would like to add to his meal plan, from the "Meals" div. The "Meals" div is populated dynamically from the simulated "server". Once a meal is dropped to the "Meal Plan" div, the sum of all the calories of the meals dropped in the "Meal Plan" div is computed. The calorie sum can than be saved to local storage by selecting the "Save Meal Plan" button. The local storage can be cleared by selecting the "Clear Meal Plan" button. The sum of calories should dynamically update the remaining calorie goal for the day, however this only happens when the sum of calories is saved to local storage and then the page refreshed. A service needs to be used, so the remaining calories update dynamically and not only onInit().  
# 4 
edit-meals component -> This component is triggered from the meals component by clicking on a meal from the "Meals" list of the meals component. The user gets redirected to editMeals/{id of the meal}. User can then edit, default or newly created meals. When the user is done editing meals, they select the "save" button which subscribes and updates the meal database on the server.

# droppedMeals.ts
interface for dropped meals in the target dropped div.

# goals.ts
interface for the options of the dropdown

# in-memory-data.service
service to simulate an API that this app is hitting. I created a database, with the default meals that are showing, in here. This database gets updated on the server, everytime a user creates/edits a meal. I tried to use the Api from the final project word doc, however I couldn't access it, therefore I simulated a server.

# Meal.service.ts
service that connects all the components together. Simulates the server and hits the in-memory-data "API"


# TODO

- https://angular.io/api/core/AfterContentChecked -> problem with localstorage 
- scroll in the meal plan



