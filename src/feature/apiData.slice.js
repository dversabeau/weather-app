import { createSlice } from "@reduxjs/toolkit";

export const apiDataSlice = createSlice({
  name: "apiData",
  initialState: {
    apiData: null,
  },
  reducers: {
    setApiData: (state, action) => {
      state.apiData = action.payload;
    },
  },
})

export const { setApiData } = apiDataSlice.actions;
export default apiDataSlice.reducer;
