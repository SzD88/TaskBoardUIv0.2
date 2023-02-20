import { Task } from "./Task";

export interface Day {
  id: number;
  projectNumber: string;
  title: string;
  description: string;
  completed: boolean;
  lastModifiedDate: Date
}

