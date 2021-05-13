import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product as ProductEntity } from './product.entity';

@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService
    ){}
      
      @Get()
      findAll(): Promise<ProductEntity[]> {
        return this.productService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string) {
        return this.productService.findOne(id);
      }
    
      @Post()
      save(@Body() file:ProductEntity){
        return this.productService.save(file);
      }
    
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.productService.delete(id);
      }
    
      @Put(':id')
      update(@Param('id') id:string,@Body() product:ProductEntity){
        return this.productService.update(id, product);  
      }
}

