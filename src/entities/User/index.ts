import {getUserAuthData} from "./model/selectors/getUserAuthData";
import {userReducer, userActions} from "./model/slice/userSlice";
import type {User, UserSchema} from "./model/types/userSchema";

export {
  userReducer,
  userActions,
  User,
  UserSchema,
  getUserAuthData
}