import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TextPostService } from './text_post.service';
import { CreateTextPostDto } from './dto/create-text_post.dto';
import { UpdateTextPostDto } from './dto/update-text_post.dto';

@Controller('text-post')
export class TextPostController {
  constructor(private readonly textPostService: TextPostService) {}

  @Post()
  create(@Body() createTextPostDto: CreateTextPostDto) {
    return this.textPostService.create(createTextPostDto);
  }

  @Get()
  findAll() {
    return this.textPostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textPostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTextPostDto: UpdateTextPostDto) {
    return this.textPostService.update(+id, updateTextPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textPostService.remove(+id);
  }
}
