import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../typings";

export interface UserState {
  allUsers: User[];
  currentUser?: User;
  chatUser?: User;
  isChatSelectorOpen: boolean;
  isChatOpen: boolean;
}

const initialState: UserState = {
  allUsers: [],
  currentUser: undefined,
  chatUser: undefined,
  isChatSelectorOpen: false,
  isChatOpen: false,
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<User[]>) => {
      state.allUsers = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    setChatUser: (
      state,
      action: PayloadAction<User>
    ) => {
      state.chatUser = action.payload;
    },
    setIsChatSelectorOpen: (state, action: PayloadAction<boolean>) => {
      state.isChatSelectorOpen = action.payload;
    },
    setIsChatOpen: (state, action: PayloadAction<boolean>) => {
      state.isChatOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addUsers,
  setCurrentUser,
  setChatUser,
  setIsChatSelectorOpen,
  setIsChatOpen,
} = UserSlice.actions;

export default UserSlice.reducer;
