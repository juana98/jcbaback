import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { HomeService } from './home.service';
import { Home as HomeEntity } from './home.entity';

@Controller('home')
export class HomeController {

    constructor(
        private HomeService: HomeService
    ){}
      
      @Get()
      findAll(): Promise<HomeEntity[]> {
        return this.HomeService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string) {
        return this.HomeService.findOne(id);
      }
    
      @Post()
      save(@Body() home:HomeEntity){
        return this.HomeService.save(home);
      }
    
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.HomeService.delete(id);
      }
    
      @Put(':id')
      update(@Param('id') id:string,@Body() home:HomeEntity){
        return this.HomeService.update(id, home);  
      }
}
