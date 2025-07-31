import { Injectable } from '@nestjs/common';
import { CreateQoutePostDto } from './dto/create-qoute_post.dto';
import { UpdateQoutePostDto } from './dto/update-qoute_post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QoutePost } from './entities/qoute_post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QoutePostService {
  constructor(@InjectRepository(QoutePost) private readonly qouteRepositry:Repository<QoutePost>){}
  
  create(createQoutePostDto: CreateQoutePostDto) {
    return 'This action adds a new qoutePost';
  }

  findAll() {
    return `This action returns all qoutePost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qoutePost`;
  }

  update(id: number, updateQoutePostDto: UpdateQoutePostDto) {
    return `This action updates a #${id} qoutePost`;
  }

  remove(id: number) {
    return `This action removes a #${id} qoutePost`;
  }
}
