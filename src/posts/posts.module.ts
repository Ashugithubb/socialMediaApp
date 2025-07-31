import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { UserModule } from 'src/user/user.module';
import { TextPostModule } from 'src/text_post/text_post.module';
import { QoutePost } from 'src/qoute_post/entities/qoute_post.entity';
import { QoutePostModule } from 'src/qoute_post/qoute_post.module';
import { TextPost } from 'src/text_post/entities/text_post.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([Post, User, TextPost, QoutePost]) ,UserModule,TextPostModule,QoutePostModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
