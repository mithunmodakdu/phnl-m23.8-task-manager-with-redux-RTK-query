import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

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
    }
  ],
  filter: "all"
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) =>{
  return state.todo.tasks;
}

export const selectFilter = (state: RootState) =>{
  return state.todo.filter;
}

export default taskSlice.reducer;
