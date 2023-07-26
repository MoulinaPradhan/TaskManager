import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from '../providers/tasks.state';
import { actions } from '../providers/tasks.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task?:TaskModel;
editTask: boolean = false;
constructor( private store:Store){}

  ngOnInit(): void {
    console.log("task"+this.task!.id)
    this.editTask= this.task!.completed;
    
}
updateToggle(){
  this.editTask=!this.editTask;
}
updateTask(){

}
deleteTask(){
this.store.dispatch(actions.deleteTaskAction({
  id:this.task!.id,
  completed:this.task!.completed,
  title:this.task!.title,
}))
}
}