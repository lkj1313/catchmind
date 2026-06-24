import { HttpException } from '@nestjs/common';

export class BaseException extends HttpException {
  constructor(
    message: string,
    status: number,
    public readonly errorCode: string,
  ) {
    super({ message, errorCode }, status);
  }
}
