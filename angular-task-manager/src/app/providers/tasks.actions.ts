import { createAction, props } from "@ngrx/store";
import { TaskModel } from "./tasks.state";

const addTaskAction = createAction("[TASK] ADD_TASK", props<TaskModel>())
const updateTaskAction = createAction("[TASK] UPDATE_TASK", props<TaskModel>())
const deleteTaskAction = createAction("[TASK] DELETE_TASK", props<TaskModel>())

//sort
const sortTaskAction = createAction("[TASK] SORT_TASK" ,  props<TaskModel>())
export const actions ={addTaskAction,updateTaskAction,deleteTaskAction,sortTaskAction};