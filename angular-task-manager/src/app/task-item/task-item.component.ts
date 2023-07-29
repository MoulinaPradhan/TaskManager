import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from '../providers/tasks.state';
import { actions } from '../providers/tasks.actions';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task?:TaskModel;
editTask: boolean = false;
editStatus?:number;
editTakenBy?:string;
constructor( private store:Store){}

  ngOnInit(): void {
    console.log("task"+this.task!.id)
  
    
}
updateToggle(){
  this.editTask=!this.editTask;
}
updateTask(form : NgForm){
  console.log(form)
  this.editTask=!this.editTask;
  this.store.dispatch(actions.updateTaskAction({

    id:this.task!.id,
    completed:false,
    title:form.controls['edit-task-title'].value,
    description:form.controls['edit-task-description'].value,
    priority:1,
    dueDate: new Date("5-9-20"),
    //form.controls['edit-task-dueDate'].value,
    status:1,
    //  form.controls['edit-task-status'].value,
    takenBy:form.controls['edit-task-takenBy'].value
  }));
 
 

}
deleteTask(){
this.store.dispatch(actions.deleteTaskAction({
  id:this.task!.id,
  completed:this.task!.completed,
  title:this.task!.title,
  description:this.task!.description,
  dueDate:this.task!.dueDate,
  priority:this.task!.priority,
  status:this.task!.status,
  takenBy:this.task!.takenBy,
}))
}
}