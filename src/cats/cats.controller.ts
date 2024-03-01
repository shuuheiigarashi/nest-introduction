import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  UsePipes,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'src/common/forbidden.exception';
import { HttpExceptionFilter } from 'src/common/http-exception.filter';
import { ZodValidationPipe } from 'src/common/validation.pipe';
import { createCatSchema } from './createCatSchema';
import { RolesGuard } from 'src/common/roles/roles.guard';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';

@Controller('cats')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    throw new ForbiddenException();
  }
}
