import { Task } from "./Task";

export interface Day {
  id: number;
  dayDate: string;
  title: string;
  description: string;
  completed: boolean;
  mainTasks: Task[];
}

