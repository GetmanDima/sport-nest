import { Catch, ArgumentsHost, ExceptionFilter, Logger } from "@nestjs/common";
import { Response } from 'express';
import { BaseError } from "sequelize";

@Catch(BaseError)
export class QueryExceptionFilter implements ExceptionFilter {
  catch(e: BaseError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = e.message
    const stack = e.stack

    Logger.error("Query error: " + message, stack + "\n")

    response
      .status(500)
      .json({
        statusCode: 500,
        timestamp: new Date().toISOString(),
        message: "Query error",
      });
  }
}
