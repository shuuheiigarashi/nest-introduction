import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodo(@Param('id') id: number) {
    return this.todoService.getTodo(id);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto.title);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.updateTodo(+id, updateTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id);
  }
}
