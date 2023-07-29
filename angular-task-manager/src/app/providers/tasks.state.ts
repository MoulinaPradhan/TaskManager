import { formatDate } from "@angular/common";

export interface TaskModel{
    id: number;
    title:string;
    completed:boolean;
    description:string;
    dueDate:Date;
    priority:number;
    status: number;
    takenBy:string;
}
export let tasks: TaskModel[]=[
    {
        id:1,
        
        title:"frontend deploy",
        description:"there is some issue to deploy this project",
        dueDate:  new Date("2019-01-16"),
        priority:1,
        status:1,
        takenBy:"Mahesh",
        completed:false,
    },
    {
        id:2,
       
        title:"issue to arrange numbers",
        description:"unable to add all the numbers in the list",
        dueDate:new Date(2023,3,4),
        priority:2,
        status:2,
        takenBy:"Rity",
        completed:true,
    }]