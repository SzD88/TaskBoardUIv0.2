import { Task } from "./Task";

export interface Project {
  id: number;
  projectNumber: string;
  title: string;
  description: string;
  completed: boolean;
  lastModifiedDate: Date
}

