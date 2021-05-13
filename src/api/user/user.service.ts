import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}
    
    findAll(): Promise<User[]> {
        return this.usersRepository.find({ relations: ["files"] });
    }

    findOne(username: string): Promise<User> {
        return this.usersRepository.findOne({
            where: {username},
        });
    }

    save(User: User): Promise<User> {
        return this.usersRepository.save(User);
    }

    delete(id: string): Promise<DeleteResult> {
        return this.usersRepository.delete(id);
    }

    update(id: string, user: User): Promise<UpdateResult> {
        return this.usersRepository.update(id,user);
    }

    async validateUser(user: User): Promise<boolean>{
        const currentUser: User = await this.findOne(user.username);
        console.log(currentUser);
        if(currentUser && currentUser.role === "administrator" ){
            return true;
        }
        return  false;
    }
}
