import {StateSchema} from "app/providers/StoreProvider";
import {getLoginError} from "./getLoginError";

describe('getLoginError', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        error: 'error'
      }
    }
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty store', () => {
    const state: Partial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});