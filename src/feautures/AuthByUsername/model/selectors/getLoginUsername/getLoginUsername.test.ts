import {StateSchema} from "app/providers/StoreProvider";
import {getLoginUsername} from "./getLoginUsername";

describe('getLoginError', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        username: 'user123'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('user123');
  });


  test('should work with empty store', () => {
    const state: Partial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });

});