import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  completed?: string | null;
  user?: UserWhereUniqueInput | null;
};
