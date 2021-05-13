import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';
import { New as NewsEntity } from './news.entity';

@Controller('news')
export class NewsController {

    constructor(
        private NewsService: NewsService
    ){}
      
      @Get()
      findAll(): Promise<NewsEntity[]> {
        return this.NewsService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string) {
        return this.NewsService.findOne(id);
      }
    
      @Post()
      save(@Body() news: NewsEntity){
        return this.NewsService.save(news);
      }
    
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.NewsService.delete(id);
      }
    
      @Put(':id')
      update(@Param('id') id:string,@Body() news: NewsEntity){
        return this.NewsService.update(id, news);  
      }
}
