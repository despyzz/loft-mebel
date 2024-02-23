import {StateSchema} from "app/providers/StoreProvider";
import {getLoginIsLoading} from "./getLoginIsLoading";

describe('getLoginError', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        isLoading: true
      }
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty store', () => {
    const state: Partial<StateSchema> = {}
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});