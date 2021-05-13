import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { New } from './news.entity';

@Injectable()
export class NewsService {

    constructor(
        @InjectRepository(New)
        private NewsRepository: Repository<New>,
    ) {}
    
    findAll(): Promise<New[]> {
        return this.NewsRepository.find();
    }

    findOne(id: string): Promise<New> {
        return this.NewsRepository.findOne(id);
    }

    save(news: New): Promise<New> {
        return this.NewsRepository.save(news);
    }

    delete(id: string): Promise<DeleteResult> {
        return this.NewsRepository.delete(id);
    }

    update(id: string, news: New): Promise<UpdateResult> {
        return this.NewsRepository.update(id,news);
    }
}
