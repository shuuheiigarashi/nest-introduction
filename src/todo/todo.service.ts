import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTodos(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }

  async getTodo(id: number): Promise<Todo> {
    return this.prismaService.todo.findUnique({ where: { id } });
  }

  async createTodo(title: string): Promise<Todo> {
    return this.prismaService.todo.create({ data: { title } });
  }

  async updateTodo(
    id: number,
    data: { title?: string; completed?: boolean },
  ): Promise<Todo> {
    return this.prismaService.todo.update({ where: { id }, data });
  }

  async deleteTodo(id: number): Promise<Todo> {
    return this.prismaService.todo.delete({ where: { id } });
  }
}
