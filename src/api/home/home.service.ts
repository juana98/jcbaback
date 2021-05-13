import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Home } from './home.entity';

@Injectable()
export class HomeService {

    constructor(
        @InjectRepository(Home)
        private HomesRepository: Repository<Home>,
    ) {}
    
    findAll(): Promise<Home[]> {
        return this.HomesRepository.find();
    }

    findOne(id: string): Promise<Home> {
        return this.HomesRepository.findOne(id);
    }

    save(home: Home): Promise<Home> {
        return this.HomesRepository.save(home);
    }

    delete(id: string): Promise<DeleteResult> {
        return this.HomesRepository.delete(id);
    }

    update(id: string, home: Home): Promise<UpdateResult> {
        return this.HomesRepository.update(id,home);
    }
}
