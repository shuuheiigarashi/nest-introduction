import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { AllExceptionsFilter } from './common/all-exceptions.filter';
import { ValidationPipe } from './common/validation.pipe';
import { RolesGuard } from './common/roles/roles.guard';
import { LoggingInterceptor } from './common/interceptor/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new RolesGuard());
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
