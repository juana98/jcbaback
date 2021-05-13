import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {}
    
    findAll(): Promise<Product[]> {
        return this.productsRepository.find();
    }

    findOne(id: string): Promise<Product> {
        return this.productsRepository.findOne(id);
    }

    save(Product: Product): Promise<Product> {
        return this.productsRepository.save(Product);
    }

    delete(id: string): Promise<DeleteResult> {
        return this.productsRepository.delete(id);
    }

    update(id: string, product: Product): Promise<UpdateResult> {
        return this.productsRepository.update(id,product);
    }

}
