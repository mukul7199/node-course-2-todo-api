import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { AllTodosComponent } from './todos/all-todos/all-todos.component';
import { AppRoutingModule } from './app-routing.module';
import { CompleteTodosComponent } from './todos/complete-todos/complete-todos.component';
import { IncompleteTodosComponent } from './todos/incomplete-todos/incomplete-todos.component';
import { SingleTodoComponent } from './todos/single-todo/single-todo.component';
import { HttpClientModule } from '@angular/common/http';

import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    NavtabsComponent,
    AllTodosComponent,
    CompleteTodosComponent,
    IncompleteTodosComponent,
    SingleTodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
