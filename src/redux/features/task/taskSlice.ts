import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState : IInitialState = {
  tasks: [
    {
      id: "kmkumlklkkkjs",
      title: "Develop frontend",
      description: "Create navbar, footer, about section, and create router",
      dueDate: "2025-07-15",
      priority: "High",
      isCompleted: false,
    },
    {
      id: "kmkumlklkkkjslfg",
      title: "Develop fullstack website",
      description: "Create navbar, footer, about section, and create router",
      dueDate: "2025-07-15",
      priority: "Low",
      isCompleted: false,
    },
    {
      id: "kmkumlkllllllll",
      title: "Develop Backend",
      description: "Create navbar, footer, about section, and create router",
      dueDate: "2025-07-15",
      priority: "Medium",
      isCompleted: false,
    }
  ],
  filter: "all"
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) =>{
      
      const id = uuidv4();
      
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false
      }
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
