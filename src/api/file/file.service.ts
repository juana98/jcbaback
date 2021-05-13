import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { File } from './file.entity';

@Injectable()
export class FileService {

    constructor(
        @InjectRepository(File)
        private filesRepository: Repository<File>,
    ) {}
    
    findAll(): Promise<File[]> {
        return this.filesRepository.find({ relations: ["user"] });
    }

    findOne(id: string): Promise<File> {
        return this.filesRepository.findOne(id);
    }

    save(post: File): Promise<File> {
        return this.filesRepository.save(post);
    }

    delete(id: string): Promise<DeleteResult> {
        return this.filesRepository.delete(id);
    }

    update(id: string, file: File): Promise<UpdateResult> {
        return this.filesRepository.update(id,file);
    }
}
