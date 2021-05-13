import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserEntity} from './user.entity';


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
    
      @Post()
      save(@Body() user:UserEntity){
        return this.userService.save(user);
      }
    
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.userService.delete(id);
      }

      @Put(':id')
      update(@Param('id') id:string,@Body() user:UserEntity){
      return this.userService.update(id,user);  
      }

}
