import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskModel } from '../providers/tasks.state';
import { taskSelector } from '../providers/tasks.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks:TaskModel[] =[];
  constructor(private store:Store){}
  ngOnInit(): void {
    this.loadTask();
  }
loadTask() {
  this.store.select(taskSelector).subscribe((state) => this.tasks= state)
}
}
