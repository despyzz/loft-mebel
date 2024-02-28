import {StateSchema} from "app/providers/StoreProvider";
import {getProfileReadonly} from "./getProfileReadonly";

describe('getProfileReadonly', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      profile: {
        data: {
          name: "name",
          surname: "surname",
        },
        isLoading: false,
        readonly: true
      }
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('should work with empty store', () => {
    const state: Partial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});