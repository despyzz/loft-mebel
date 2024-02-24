import {StateSchema} from "app/providers/StoreProvider";
import {getProfileError} from "./getProfileError";

describe('getProfileError', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      profile: {
        error: 'error',
        isLoading: false,
        readonly: true
      }
    }
    expect(getProfileError(state as StateSchema)).toEqual("error");
  });

  test('should work with empty store', () => {
    const state: Partial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});