import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import * as dotenv from 'dotenv'; // Import dotenv

dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    UserModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
