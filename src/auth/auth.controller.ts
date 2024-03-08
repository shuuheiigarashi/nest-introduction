import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Msg } from './interface/auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  signUp(@Body() postData: { email: string; password: string }): Promise<Msg> {
    return this.authService.signUp(postData);
  }
}
