export interface Profile {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  city?: string;
  street?: string;
  building?: string;
  apartment?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: Array<ValidateProfileError>;
}

export enum ValidateProfileError {
  NO_DATA,
  SERVER_ERROR,
  INCORRECT_NAME,
  INCORRECT_SURNAME,
  INCORRECT_EMAIL,
  INCORRECT_PHONE,
  INCORRECT_CITY,
  INCORRECT_STREET,
  INCORRECT_BUILDING,
  INCORRECT_APARTMENT,
}