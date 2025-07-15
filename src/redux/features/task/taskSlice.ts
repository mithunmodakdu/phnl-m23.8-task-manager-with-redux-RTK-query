import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  task: ITask[]
}

const initialState : IInitialState = {
  task: [
    {
      id: "kmkumlklkkkjs",
      title: "Develop frontend",
      description: "Create navbar, footer, about section, and create router",
      dueDate: "2025-07-15",
      priority: "High",
      isCompleted: false,
    }
  ]
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
