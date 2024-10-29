/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAppError {
  error: Error & { digest?: string };
  reset: () => void;
}

export interface IGenericResponse<T = any> {
  map(arg0: (item: any) => string): unknown;
  status: number;
  is_flag: boolean;
  msg: string;
  data: T;
}
