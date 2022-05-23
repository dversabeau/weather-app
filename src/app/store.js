import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from '../feature/apiData.slice';
import searchReducer from '../feature/search.slice'

export default configureStore({
  reducer: {
    apiData: apiDataReducer,
    search: searchReducer,
  },
});