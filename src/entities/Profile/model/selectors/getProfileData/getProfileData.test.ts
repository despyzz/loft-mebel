import {StateSchema} from "app/providers/StoreProvider";
import {getProfileData} from "./getProfileData";

describe('getProfileData', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      profile: {
        data: {
          name: "name",
          surname: "surname",
        },
        error: 'error',
        isLoading: false,
        readonly: true
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual({
      name: "name",
      surname: "surname",
    });
  });

  test('should work with empty store', () => {
    const state: Partial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});