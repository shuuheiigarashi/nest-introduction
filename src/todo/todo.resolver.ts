import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Resolver('Todo')
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query('todos')
  async getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @Query('todo')
  async getTodo(@Args('id') id: number): Promise<Todo> {
    return this.todoService.getTodo(id);
  }

  @Mutation('createTodo')
  async createTodo(@Args('title') title: string): Promise<Todo> {
    return this.todoService.createTodo(title);
  }

  @Mutation('updateTodo')
  async updateTodo(
    @Args('id') id: number,
    @Args('title') title: string,
    @Args('completed') completed: boolean,
  ): Promise<Todo> {
    return this.todoService.updateTodo(id, { title, completed });
  }

  @Mutation('deleteTodo')
  async deleteTodo(@Args('id') id: number): Promise<Todo> {
    return this.todoService.deleteTodo(id);
  }
}
