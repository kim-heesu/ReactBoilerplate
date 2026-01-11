export interface UpdateListBody {
  name: string;
  age: string;
}

export interface MutateParams {
  id: string;
}

export interface UpdateListParams extends MutateParams, UpdateListBody {}

export interface UpdateListResponse {
  success: boolean;
  message: string;
}