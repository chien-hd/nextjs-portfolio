export interface IAppError {
  error: Error & { digest?: string };
  reset: () => void;
}
