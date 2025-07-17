export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
  isCompleted: boolean;
}

export interface IUser {
  id: string;
  name: string
}