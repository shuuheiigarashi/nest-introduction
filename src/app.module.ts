import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { logger } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './common/validation.pipe';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
