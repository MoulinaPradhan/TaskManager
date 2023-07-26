import { Component, Input, OnInit } from '@angular/core';
import { TaskModel, tasks } from '../providers/tasks.state';
import { Store } from '@ngrx/store';
import { actions } from '../providers/tasks.actions';
import { taskSelector } from '../providers/tasks.reducers';
import { state } from '@angular/animations';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent  implements OnInit{
 taskInput?: string;
 tasks?:TaskModel[];
 constructor(private store:Store){}
  ngOnInit(): void {
   this.store.select(taskSelector).subscribe(state=>this.tasks=state)
}
addTask(){
  if(this.taskInput!="" || this.taskInput!=null)
this.store.dispatch(actions.addTaskAction(
 
  {
    id:this.tasks!.length+1,
    completed:false,
    title:this.taskInput!,
  }
));
this.taskInput='';
}
}
