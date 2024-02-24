import { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "./model/slice/profileSlice";
import type {Profile, ProfileSchema } from "./model/types/profile";

export {
  Profile,
  ProfileSchema,
  profileActions,
  profileReducer,
  fetchProfileData
}