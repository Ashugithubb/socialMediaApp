import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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
  ) { }

  async likePost(createLikeDto: CreateLikeDto) {
    const { userId, postId } = createLikeDto;
    const user = await this.userRepository.findOneBy({ id: userId });
    const post = await this.postRepository.findOneBy({ id: postId });

    if (!user || !post) {
      throw new NotFoundException('User or Post not found');
    }


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

    const likes = await this.likeRepository.find({
      where: { post: { id: postId } },
      relations: ['user'],
    });
    return likes.map(like => ({
      userId: like.user.id,
      name: like.user.name,
    }));
  }

  async remove(createLikeDto: CreateLikeDto) {
    const { userId, postId } = createLikeDto

    const like = await this.likeRepository.findOne({
      where: {
        user: { id: userId },
        post: { id: postId }
      }
    }
    );
    if (!like) throw new BadRequestException();
    const likeId: number = like?.id;

    // return await this.likeRepository.delete(likeId);
    return await this.likeRepository.softDelete(likeId);
  }






  update(updateLikeDto: UpdateLikeDto) {
    return
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




}
