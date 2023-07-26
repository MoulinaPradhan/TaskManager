import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from '../providers/tasks.state';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task?:TaskModel;
editTask: boolean = false;
constructor(){}

  ngOnInit(): void {
    console.log("task"+this.task)
    this.editTask= this.task!.completed;
    
}
updateToggle(){
  this.editTask=!this.editTask;
}
updateTask(){

}
deleteTask(){

}
}