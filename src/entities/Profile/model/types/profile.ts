export interface Profile {
  name: string;
  surname: string;
  email?: string;
  phone?: string;
  city?: string;
  street?: string;
  building?: string;
  apartment?: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}