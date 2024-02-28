import {StateSchema} from "app/providers/StoreProvider";
import {getProfileForm} from "./getProfileForm";

describe('getProfileForm', () => {
  test('should return value', () => {
    const state: Partial<StateSchema> = {
      profile: {
        form: {
          name: "name",
          surname: "surname",
        },
        isLoading: false,
        readonly: true
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual({
      name: "name",
      surname: "surname",
    });
  });

  test('should work with empty store', () => {
    const state: Partial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});