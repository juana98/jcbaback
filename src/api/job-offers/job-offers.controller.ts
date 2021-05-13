import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { JobOffersService } from './job-offers.service';
import { JobOffers as JobOffersEntity } from './job-offers.entity';

@Controller('job-offers')
export class JobOffersController {

    constructor(
        private JobOffersService: JobOffersService
    ){}
      
      @Get()
      findAll(): Promise<JobOffersEntity[]> {
        return this.JobOffersService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string) {
        return this.JobOffersService.findOne(id);
      }
    
      @Post()
      save(@Body() jobOffer:JobOffersEntity){
        return this.JobOffersService.save(jobOffer);
      }
    
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.JobOffersService.delete(id);
      }
    
      @Put(':id')
      update(@Param('id') id:string,@Body() jobOffer:JobOffersEntity){
        return this.JobOffersService.update(id, jobOffer);  
      }
}
