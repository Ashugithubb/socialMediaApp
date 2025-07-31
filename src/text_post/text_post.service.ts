import { Injectable } from '@nestjs/common';
import { CreateTextPostDto } from './dto/create-text_post.dto';
import { UpdateTextPostDto } from './dto/update-text_post.dto';

@Injectable()
export class TextPostService {
  create(createTextPostDto: CreateTextPostDto) {
    return 'This action adds a new textPost';
  }

  findAll() {
    return `This action returns all textPost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textPost`;
  }

  update(id: number, updateTextPostDto: UpdateTextPostDto) {
    return `This action updates a #${id} textPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} textPost`;
  }
}
