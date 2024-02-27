import {Profile, ValidateProfileError} from "../../types/profile";

export const ValidateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    name,
    surname,
    email,
    phone,
    city,
    street,
    building,
    apartment
  } = profile;

  const errors: Array<ValidateProfileError> = [];

  // validate name
  if (!name) {
    errors.push(ValidateProfileError.INCORRECT_NAME);
  }

  // validate surname
  if (!surname) {
    errors.push(ValidateProfileError.INCORRECT_SURNAME);
  }

  // validate email
  if (!email) {
    errors.push(ValidateProfileError.INCORRECT_EMAIL);
  }

  // validate phone
  if (!phone) {
    errors.push(ValidateProfileError.INCORRECT_PHONE);
  }

  // validate city
  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  // validate street
  if (!street) {
    errors.push(ValidateProfileError.INCORRECT_STREET);
  }

  // validate building
  if (!building) {
    errors.push(ValidateProfileError.INCORRECT_BUILDING);
  }

  // validate apartment
  if (!apartment) {
    errors.push(ValidateProfileError.INCORRECT_APARTMENT);
  }

  return errors;
}