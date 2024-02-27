import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Profile, ValidateProfileError} from "../../types/profile";
import {getProfileForm} from "../../selectors/getProfileForm";
import {ValidateProfileData} from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<Array<ValidateProfileError>>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState
    } = thunkAPI;

    const formData = getProfileForm(getState());

    const validateErrors = ValidateProfileData(formData);
    if (validateErrors.length) {
      return rejectWithValue(validateErrors);
    }

    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      if (!response.data) {
        // noinspection ExceptionCaughtLocallyJS
        throw new Error();
      }

      return response.data;

    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  }
)