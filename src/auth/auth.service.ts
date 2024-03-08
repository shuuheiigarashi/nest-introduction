import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { Msg } from './interface/auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
  async signUp(postData): Promise<Msg> {
    const hashed = await bcrypt.hash(postData.password, 12);
    try {
      await this.prismaService.user.create({
        data: {
          email: postData.email,
          hashedPassword: hashed,
        },
      });
      return { message: 'ok' };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('This email is already taken.');
        }
      }
    }
  }
}
