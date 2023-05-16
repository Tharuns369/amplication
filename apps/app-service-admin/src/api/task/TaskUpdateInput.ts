import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  completed?: string | null;
  user?: UserWhereUniqueInput | null;
};
