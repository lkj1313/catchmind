import { ApiResponse } from '@common/interfaces/api-response.interface';

export function success<T>(
  data: T,
  message: string | null = null,
): ApiResponse<T> {
  return {
    success: true,
    data,
    message,
    errorCode: null,
  };
}

export function error(
  message: string,
  errorCode: string = 'INTERNAL_SERVER_ERROR',
): ApiResponse<null> {
  return {
    success: false,
    data: null,
    message,
    errorCode,
  };
}
