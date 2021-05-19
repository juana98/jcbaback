import { Controller, Get, Param, Post, Body, Delete, Put,  UploadedFiles,  UseGuards, UseInterceptors  } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { User as UserEntity} from './user.entity';
import { Auth } from 'src/common/decorators';
import { CreateUserDto } from './dtos/create-user.dto';
import { AppResource } from 'src/app.roles';


@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ){}
    
      @Get()
      findAll(): Promise<UserEntity[]> {
        return this.userService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
      }
      @Get(':username')
      findOnebyUsername(@Param('username') id: string) {
        return this.userService.findOne(id);
      }
    
      @Auth({
        possession: 'any',
        action: 'create',
        resource: AppResource.USER
      })
      @Post()
      save(@Body() dto: CreateUserDto){
        //return this.userService.save(dto);
        const data = this.userService.save(dto);
        return { message: 'User created', data };
      }
    
      @Auth()
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.userService.delete(id);
      }

      @Auth()
      @Put(':id')
      update(@Param('id') id:string,@Body() user:UserEntity){
      return this.userService.update(id,user);  
      }


}
