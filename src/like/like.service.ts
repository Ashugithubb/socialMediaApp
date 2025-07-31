import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/posts/entities/post.entity';

@Injectable()
export class LikeService {

  constructor(
  @InjectRepository(Like)
  private likeRepository: Repository<Like>,

  @InjectRepository(User)
  private userRepository: Repository<User>,

  @InjectRepository(Post)
  private postRepository: Repository<Post>,
) {}



  async likePost(userId: number, postId: number) {
  const user = await this.userRepository.findOneBy({ id: userId });
  const post = await this.postRepository.findOneBy({ id: postId });

  if (!user || !post) {
    throw new NotFoundException('User or Post not found');
  }

  // ❌ Prevent duplicate like
  const existingLike = await this.likeRepository.findOne({
    where: { user: { id: userId }, post: { id: postId } },
  });

  if (existingLike) {
    throw new ConflictException('You already liked this post');
  }

  const like = this.likeRepository.create({ user, post });
  await this.likeRepository.save(like);

  return { message: 'Post liked successfully' };
}


async getLikesByPost(postId: number) {
  const post = await this.postRepository.findOneBy({ id: postId });
  if (!post) throw new NotFoundException('Post not found');

  const likes = await this.likeRepository.find({
    where: { post: { id: postId } },
    relations: ['user'],
  });

  return likes.map(like => ({
    userId: like.user.id,
    name: like.user.name,
  }));
}




  
  create(createLikeDto: CreateLikeDto) {
    return 'This action adds a new like';
  }

  findAll() {
    return `This action returns all like`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
