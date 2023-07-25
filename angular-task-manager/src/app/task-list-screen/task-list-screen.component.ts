import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-task-list-screen',
  templateUrl: './task-list-screen.component.html',
  styleUrls: ['./task-list-screen.component.css']
})

export class TaskListScreenComponent implements OnInit{
  taskArray =[{title: "LALAL", taskDate:"",priority:"low"}]

  ngOnInit(): void {
      
  }
  onDelete(index: number){
    console.log(index)
    this.taskArray.splice(index,1)
  }
onSubmit(form : NgForm){
  console.log(form);
  this.taskArray.push({
    title: form.controls['task-title'].value,
    priority: form.controls['task-priority'].value,
    taskDate: form.controls['task-date'].value
  })
  form.reset()
}
}
