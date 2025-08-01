import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DiscoverPostQueryDto } from './dto/query.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Post()
  create(@Body() createPostDto:CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  getDiscover(@Query() query: DiscoverPostQueryDto) {
    return this.postsService.discoverPosts(query);
  }

  @Get('user/:userId')
  async getUserPosts(@Param('userId') userId: number) {
    return this.postsService.getMyPosts(+userId);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postsService.delete(+id);
  }
}








// @Param('id') → URL: /posts/5

// @Query('id') → URL: /posts?id=5


// @Get('me')
// getMyPosts(@Query('page') page: number, @Query('limit') limit: number, @UserId() userId: number) {
//   return this.postsService.getMyPosts(userId, page, limit);
// }