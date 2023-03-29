export interface Task {
  id: number;
  content: string;
  completed: boolean;
  dayDate: Date ;
  levelAboveId: number;
}
