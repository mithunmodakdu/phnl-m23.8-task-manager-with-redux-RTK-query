import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState : IInitialState = {
  tasks: [ ],
  filter: "all"
};

type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;

const createTaskData = (formTaskData: DraftTask) : ITask =>{
  return {id: nanoid(), isCompleted: false, ...formTaskData}
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) =>{
      
      // const id = uuidv4();
      
      // const taskData = {
      //   ...action.payload,
      //   id,
      //   isCompleted: false
      // }

      const taskData = createTaskData(action.payload)
      state.tasks.push(taskData);
    }
  },
});

export const selectTasks = (state: RootState) =>{
  return state.todo.tasks;
}

export const selectFilter = (state: RootState) =>{
  return state.todo.filter;
}

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;
