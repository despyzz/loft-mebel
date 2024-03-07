import {FilterSchema, Price} from "../types/filter";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Category} from "entities/Category";


const initialState: FilterSchema = {
  isLoading: false,
  error: undefined,
  data: {
    price: {
      start: 20000,
      end: 80000
    },
    category: undefined
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<Price>) => {
      state.data.price = action.payload;
    },
    setCategory: (state, action: PayloadAction<Category>) => {
      state.data.category = action.payload;
    }
  },
})

export const {actions: filterActions} = filterSlice
export const {reducer: filterReducer} = filterSlice;