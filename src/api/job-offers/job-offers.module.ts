import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOffers } from './job-offers.entity';
import { JobOffersController } from './job-offers.controller';
import { JobOffersService } from './job-offers.service';

@Module({
  imports: [TypeOrmModule.forFeature([JobOffers])],
  controllers: [JobOffersController],
  providers: [JobOffersService],
  exports: [JobOffersService]
})
export class JobOffersModule {}
