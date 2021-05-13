import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { JobOffers } from './job-offers.entity';

@Injectable()
export class JobOffersService {

    constructor(
        @InjectRepository(JobOffers)
        private JobOfferssRepository: Repository<JobOffers>,
    ) {}
    
    findAll(): Promise<JobOffers[]> {
        return this.JobOfferssRepository.find();
    }

    findOne(id: string): Promise<JobOffers> {
        return this.JobOfferssRepository.findOne(id);
    }

    save(jobOffers: JobOffers): Promise<JobOffers> {
        return this.JobOfferssRepository.save(jobOffers);
    }

    delete(id: string): Promise<DeleteResult> {
        return this.JobOfferssRepository.delete(id);
    }

    update(id: string, jobOffers: JobOffers): Promise<UpdateResult> {
        return this.JobOfferssRepository.update(id,jobOffers);
    }
}
