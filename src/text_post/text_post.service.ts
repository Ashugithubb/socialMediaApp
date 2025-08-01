import { Injectable } from '@nestjs/common';
import { CreateTextPostDto } from './dto/create-text_post.dto';
import { UpdateTextPostDto } from './dto/update-text_post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TextPost } from './entities/text_post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TextPostService {
  constructor(@InjectRepository(TextPost) private readonly textPostRepo:Repository<TextPost>){}

  async create(createTextPostDto: CreateTextPostDto) {
    
    return 'This action adds a new textPost';
  }

  findAll() {
    return `This action returns all textPost`;
  }

  async findOne(id: number) {
         const text =  await this.textPostRepo.find({
          
         })
        //  console.log(text);
  }

  update(id: number, updateTextPostDto: UpdateTextPostDto) {
    return `This action updates a #${id} textPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} textPost`;
  }
}
