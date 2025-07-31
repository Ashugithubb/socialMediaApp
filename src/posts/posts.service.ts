import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostCategory } from './enum/post.category';

@Injectable()
export class PostsService {
  async create(createPostDto: Partial<CreatePostDto>) {
    const {type, text, quote, author } = createPostDto;
    // if(type===PostCategory.TEXT){
    //   const textPost = await this.textPostRepository.createTextPost(createPostDto);
    //   return await this.postRepository.save({type, postId: textPost.id});
    // }
    // else if(type===postEnum.QUOTE){
    //   const quotePost = await this.quotePostRepository.createQuotePost(createPostDto);
    //   return await this.postRepository.save({type, postId: quotePost.id});
    // }
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
