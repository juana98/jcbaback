import { Controller, Get, Post, Body, Param, Delete, Put, UploadedFiles,  UseGuards, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import  MulterGoogleStorage  from 'multer-google-storage';
import { FileService } from './file.service';
import { File as FileEntity } from './file.entity';
import * as path from 'path';

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

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files', 3,{
    dest: "./uploads",
  })
  )
  uploadFile(@UploadedFiles() files){
    console.log(files)
  }

  @Post('uploadInDrive')
  @UseInterceptors(FilesInterceptor('file', 2, {
    dest: "./uploads",
    /*storage: new MulterGoogleStorage({
      projectId: 'your project id',
      keyFilename: path.join(__dirname, '../myfile.json'),
      bucket: "",
      filename: (req, file, cb) => {
        const fileNameSplit = file.originalname.split('.');
        const fileExt = fileNameSplit.pop();
        cb(null, `${Date.now()}.${fileExt}`);
      }
    })*/

  }))
  async saveInDrive(@UploadedFiles() file, @Body() body: any): Promise<any> {
    console.log(file);
    console.log(typeof(file));
    return this.fileService.uploadInDrive(file);
  }

}