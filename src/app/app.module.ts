import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { PruebaTypescriptEjerciciosComponent } from './prueba-typescript-ejercicios/prueba-typescript-ejercicios.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    PruebaTypescriptEjerciciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
