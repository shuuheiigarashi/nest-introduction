import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  title?: string;

  @IsOptional()
  @IsBoolean({ message: 'Completed must be a boolean' })
  completed?: boolean;
}
