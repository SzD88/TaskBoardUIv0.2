import { Task } from "./Task";

export interface Day {
  id: number;
  dayDate: Date;
  title: string;
  description: string;
  completed: boolean;
  mainTasks: Task[];
}

