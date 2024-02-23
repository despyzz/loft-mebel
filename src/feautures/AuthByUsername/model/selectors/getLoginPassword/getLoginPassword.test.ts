import {StateSchema} from "app/providers/StoreProvider";
import {getLoginPassword} from "./getLoginPassword";

describe('getLoginError', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        password: '123qwerty'
      }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('123qwerty');
  });


  test('should work with empty store', () => {
    const state: Partial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });

});