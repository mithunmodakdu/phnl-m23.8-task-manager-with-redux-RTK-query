import type { IUser } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";

interface IInitialState {
  users: IUser[];
}

const initialState: IInitialState = {
  users: [
    {
      id: "G1imG5rU2Gk9DCqw4bMm",
      name: "Mithun"
    }
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUserData = (formUserData: DraftUser): IUser => {
  return { id: nanoid(), ...formUserData };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUserData(action.payload);
      state.users.push(userData);
    },

    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload)
    },
  },
});


export const { addUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
