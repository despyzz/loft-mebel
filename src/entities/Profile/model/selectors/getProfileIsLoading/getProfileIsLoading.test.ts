import {StateSchema} from "app/providers/StoreProvider";
import {getProfileIsLoading} from "./getProfileIsLoading";

describe('getProfileIsLoading', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      profile: {
        error: 'error',
        isLoading: false,
        readonly: true
      }
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should work with empty store', () => {
    const state: Partial<StateSchema> = {}
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });
});