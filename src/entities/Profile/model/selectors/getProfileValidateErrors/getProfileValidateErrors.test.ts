import {StateSchema} from "app/providers/StoreProvider";
import {getProfileValidateErrors} from "./getProfileValidateErrors";
import {ValidateProfileError} from "../../types/profile";

describe('getProfileValidateErrors', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.NO_DATA,
          ValidateProfileError.INCORRECT_STREET,
          ValidateProfileError.INCORRECT_NAME,
        ],
        isLoading: false,
        readonly: true
      }
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.NO_DATA,
      ValidateProfileError.INCORRECT_STREET,
      ValidateProfileError.INCORRECT_NAME,
    ]);
  });

  test('should work with empty store', () => {
    const state: Partial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});