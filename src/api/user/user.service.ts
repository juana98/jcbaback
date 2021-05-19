import { BadRequestException, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';

export interface UserFindOne {
    id?: number;
    email?: string;
  }

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}
    
    findAll(): Promise<User[]> {
        return this.usersRepository.find({ relations: ["files"] });
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    async save(dto: CreateUserDto): Promise<User> {
        //return this.usersRepository.save(user);
        const userExist = await this.usersRepository.findOne({username: dto.username})
        console.log("Eixixt",userExist)
        if (userExist)
            throw new BadRequestException('User already registered');

        const newUser = this.usersRepository.create(dto);
        const user = this.usersRepository.save(newUser);

        delete (await user).password;
        console.log(user)
        return user;
    }

    delete(id: string): Promise<DeleteResult> {
        return this.usersRepository.delete(id);
    }

    update(id: string, user: User): Promise<UpdateResult> {
        return this.usersRepository.update(id,user);
    }

    async findUsername(username: string){
        return await this.usersRepository.findOne({
            where: {username}
        });
        
    }

    async validateUser(user: User): Promise<boolean>{
        const currentUser: User = await this.findOne(user.username);
        console.log(currentUser);
        if(currentUser && currentUser.role === ["admin"] ){
            return true;
        }
        return  false;
    }
}
