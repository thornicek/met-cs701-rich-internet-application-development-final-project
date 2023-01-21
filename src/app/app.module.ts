import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import meals component
import { MealsComponent } from './meals/meals.component';
// import forms module
import { FormsModule } from '@angular/forms'; 

// import Drag and Drop
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditMealsComponent } from './edit-meals/edit-meals.component';

// imports to simulate fetching from web
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateMealComponent } from './create-meal/create-meal.component';

// import drop down
import { DropdownComponent } from './dropdown/dropdown.component';





@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    EditMealsComponent,
    CreateMealComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    HttpClientModule,

    

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
