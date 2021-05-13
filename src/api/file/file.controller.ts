import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { FileService } from './file.service';
import { File as FileEntity } from './file.entity';

@Controller('file')
export class FileController {

constructor(
    private fileService: FileService
){}
  
  @Get()
  findAll(): Promise<FileEntity[]> {
    return this.fileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileService.findOne(id);
  }

  @Post()
  save(@Body() file:FileEntity){
    return this.fileService.save(file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id:string,@Body() file:FileEntity){
    return this.fileService.update(id,file);  
  }
}