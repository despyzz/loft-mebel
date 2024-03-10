import {SortSchema, SortTypes} from "../types/sort";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: SortSchema = {
  isLoading: false,
  error: undefined,
  data: {
    type: undefined
  }
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<SortTypes>) => {
      if (state.data)
        state.data.type = action.payload;
    }
  },
})

export const {actions: sortActions} = sortSlice
export const {reducer: sortReducer} = sortSlice;