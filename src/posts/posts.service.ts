import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostCategory } from './enum/post.category';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { TextPost } from 'src/text_post/entities/text_post.entity';
import { QoutePost } from 'src/qoute_post/entities/qoute_post.entity';
import { Post } from './entities/post.entity';
 import { Brackets } from 'typeorm';
import { DiscoverPostQueryDto } from './dto/query.dto';


@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(TextPost)
    private textPostRepository: Repository<TextPost>,

    @InjectRepository(QoutePost)
    private qoutePostRepository: Repository<QoutePost>,
  ) { }


  async create(createPostDto: Partial<CreatePostDto>) {
    const { postCatogory, userId, content, quote, author } = createPostDto;

    // 1. Validate user
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // 2. Create base post
    const post = this.postRepository.create({
      user,
      postCatogory,
    });

    await this.postRepository.save(post); // so we get post.id

    // 3. Handle polymorphic logic
    if (postCatogory === PostCategory.TEXT) {
      const textPost = this.textPostRepository.create({
        content,
        post,
      });
      await this.textPostRepository.save(textPost);
    } else if (postCatogory === PostCategory.QOUTE) {
      const quotePost = this.qoutePostRepository.create({
        quote,
        author,
        post,
      });
      await this.qoutePostRepository.save(quotePost);
    }

    return { message: 'Post created successfully', postId: post.id };
  }


  async delete(postId: number) {
    const post = await this.postRepository.findOneBy({ id: postId });
    if (!post) throw new NotFoundException('Post not found');

    await this.postRepository.delete(postId);

    return { message: 'Post and related data deleted successfully' };
  }


async discoverPosts(query: DiscoverPostQueryDto) {
  const {
    page = 1,
    limit = 10,
    search,
    postCatogory,
    sort = 'NEW',
  } = query;

  const qb = this.postRepository
    .createQueryBuilder('post')
    .leftJoinAndSelect('post.user', 'user')
    .leftJoinAndSelect('post.textPost', 'textPost')
    .leftJoinAndSelect('post.quotePost', 'quotePost');

  // 🔎 Filter by post category
  if (postCatogory) {
    qb.andWhere('post.postCatogory = :postCatogory', { postCatogory });
  }

  // 🔎 Search in text or quote content
  if (search) {
    qb.andWhere(
      new Brackets((qb) => {
        qb.where('textPost.content ILIKE :search', { search: `%${search}%` })
          .orWhere('quotePost.quote ILIKE :search', { search: `%${search}%` });
      }),
    );
  }

  // 📅 Sort by creation date
  qb.orderBy('post.createdAt', sort === 'NEW' ? 'DESC' : 'ASC');

  // 📄 Pagination
  qb.skip((page - 1) * limit).take(limit);

  // 🔁 Execute and return
  const [data, total] = await qb.getManyAndCount();

  return {
    data,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}


  // async delete(postId: number) {
  //   // 1. Find the post (with category and id)
  //   const post = await this.postRepository.findOne({
  //     where: { id: postId },
  //   });

  //   if (!post) {
  //     throw new NotFoundException('Post not found');
  //   }

  //   // 2. Delete the associated polymorphic child first
  //   if (post.postCatogory === PostCategory.TEXT) {
  //     await this.textPostRepository.delete({ post: { id: postId } });
  //   }

  //   if (post.postCatogory === PostCategory.QOUTE) {
  //     await this.qoutePostRepository.delete({ post: { id: postId } });
  //   }

  //   // 3. Delete the base post
  //   await this.postRepository.delete(postId);

  //   return { message: 'Post deleted successfully' };
  // }





  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }


}
