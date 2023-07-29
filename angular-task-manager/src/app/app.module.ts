import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { taskReducer } from './providers/tasks.reducers';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    TaskItemComponent,
    TaskInputComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      "tasks":taskReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
