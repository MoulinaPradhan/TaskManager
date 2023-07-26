import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { TaskModel, tasks } from "./tasks.state";
import { actions } from "./tasks.actions";


export const taskReducer = createReducer(
    tasks,
    on(actions.addTaskAction, (state, task) => {
        return [...state, task];
    }),
    on(actions.updateTaskAction, (state, task) => {
       let tempTaskIndex = state.findIndex((t)=> t.id == task.id);  
       var tempStates =[...state];
       if(tempTaskIndex !=-1){
      tempStates[tempTaskIndex] = task;
       
     }
     return [...tempStates];
    }),
    on(actions.deleteTaskAction, (state, task) => {
      let tasks = state.filter((t) => t.id != task.id);
      return [...tasks];
     }),
);


export const taskSelector = createSelector(createFeatureSelector("tasks"),
(tasks:TaskModel[]) => tasks
);