export enum SortTypes {
  descending,
  ascending,
  popularity
}

export interface Sort {
  type: SortTypes
}

export interface SortSchema {
  isLoading?: boolean;
  error?: string;
  data: Sort
}