import {StateSchema} from "app/providers/StoreProvider";
import {getLoginState} from "./getLoginState";

describe('getLoginError', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        username: 'user123',
        password: 'qwerty123',
        isLoading: true,
        error: 'error',
      }
    }
    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'user123',
      password: 'qwerty123',
      isLoading: true,
      error: 'error',
    });
  });


  test('should work with empty store', () => {
    const state: Partial<StateSchema> = {}
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });

});