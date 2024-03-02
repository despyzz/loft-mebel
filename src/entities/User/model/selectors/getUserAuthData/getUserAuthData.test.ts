import {StateSchema} from "app/providers/StoreProvider";
import {getUserAuthData} from "./getUserAuthData";

describe('getUserAuthData', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      user: {
        authData: {
          id: '123',
          username: 'username123'
        }
      }
    }
    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: '123',
      username: 'username123'
    });
  });
});