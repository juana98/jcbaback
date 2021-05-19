import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessControlModule } from 'nest-access-control';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './api/user/user.module';
import { FileModule } from './api/file/file.module';
import { ProductModule } from './api/product/product.module';
import { HomeModule } from './api/home/home.module';
import { JobOffersModule } from './api/job-offers/job-offers.module';
import { NewsModule } from './api/new/news.module';
import { AuthModule } from './api/auth/auth.module';
import { roles } from './app.roles';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    ConfigModule.forRoot({isGlobal: true}),
    AccessControlModule.forRoles(roles),
    AuthModule,
    UserModule,
    FileModule, 
    ProductModule,
    HomeModule,
    JobOffersModule,
    NewsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
