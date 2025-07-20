export interface ITask {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
  assignedTo: string | null,
  isCompleted: boolean;
}

export interface IUser {
  _id: string;
  name: string
}