export enum SortTypes {
  descending,
  ascending,
}

export interface Sort {
  type?: SortTypes
}

export interface SortSchema {
  isLoading?: boolean;
  error?: string;
  data: Sort
}