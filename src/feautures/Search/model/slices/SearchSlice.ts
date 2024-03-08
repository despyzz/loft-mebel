import {SearchSchema} from "../types/search";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: SearchSchema = {
  data: {
    value: ""
  }
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      if (state.data)
        state.data.value = action.payload;
    },
  },
})

export const {actions: searchActions} = searchSlice
export const {reducer: searchReducer} = searchSlice;