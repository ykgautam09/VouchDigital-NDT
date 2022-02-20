import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchema } from './contact.schema';
import { AuthMiddleware } from '../auth/auth.middleware';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]),
  ],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthMiddleware).forRoutes('api');
  }
}
