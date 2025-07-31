import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QoutePostService } from './qoute_post.service';
import { CreateQoutePostDto } from './dto/create-qoute_post.dto';
import { UpdateQoutePostDto } from './dto/update-qoute_post.dto';

@Controller('qoute-post')
export class QoutePostController {
  constructor(private readonly qoutePostService: QoutePostService) {}

  @Post()
  create(@Body() createQoutePostDto: CreateQoutePostDto) {
    return this.qoutePostService.create(createQoutePostDto);
  }

  @Get()
  findAll() {
    return this.qoutePostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qoutePostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQoutePostDto: UpdateQoutePostDto) {
    return this.qoutePostService.update(+id, updateQoutePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qoutePostService.remove(+id);
  }
}
