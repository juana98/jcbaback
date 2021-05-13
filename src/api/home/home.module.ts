import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './home.entity';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  controllers: [HomeController],
  providers: [HomeService],
  exports: [HomeService]
})
export class HomeModule {}
