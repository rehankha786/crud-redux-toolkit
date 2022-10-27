import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: [] },

  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    removeUser: (state, action) => {
      let obj = action.payload;
      state.value = state.value.filter((elem) => elem.id !== obj.id);
    },

    updateUser: (state, action) => {
      let updateobj = action.payload;
      state.value = state.value.map((item) =>
        item.id === updateobj.id ? updateobj : item
      );
    },
  },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
