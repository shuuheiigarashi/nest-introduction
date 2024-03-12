import { Mutation, Resolver } from '@nestjs/graphql';
import { Auth } from './entities/auth.entity';
import { AuthService } from './auth.service';
import { Msg } from './interface/auth.interface';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  async signUp(postData): Promise<Msg> {
    return this.authService.signUp(postData);
  }

  @Mutation(() => Auth)
  async signIn(postData) {
    return this.authService.signIn(postData);
  }
}
