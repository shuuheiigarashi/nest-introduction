import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { ConfigService } from '@nestjs/config';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TodoResolver } from './todo.resolver';

@Module({
  imports: [PrismaModule],
  controllers: [TodoController],
  providers: [TodoService, ConfigService, TodoResolver],
})
export class TodoModule {}
