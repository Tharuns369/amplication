import { User } from "../user/User";

export type Task = {
  completed: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
