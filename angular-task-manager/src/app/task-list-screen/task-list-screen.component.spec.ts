import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListScreenComponent } from './task-list-screen.component';

describe('TaskListScreenComponent', () => {
  let component: TaskListScreenComponent;
  let fixture: ComponentFixture<TaskListScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListScreenComponent]
    });
    fixture = TestBed.createComponent(TaskListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
