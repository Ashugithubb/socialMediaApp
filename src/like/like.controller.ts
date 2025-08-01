import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) { }

  @Post()
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likeService.likePost(createLikeDto);
  }

  @Delete()
  remove(@Body() createLikeDto: CreateLikeDto) {

    return this.likeService.remove(createLikeDto);
  }

  @Patch()
  update(@Body() createLikeDto: CreateLikeDto) {
    return this.likeService.update(createLikeDto);
  }




  @Get()
  findAll() {
    return this.likeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likeService.findOne(+id);
  }




}
