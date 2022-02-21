import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchema } from './contact.schema';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]),
  ],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {
  // configure(consumer: MiddlewareConsumer): any { implements NestModule
  //   consumer.apply(AuthGaurd).forRoutes('api');
  // }
}
