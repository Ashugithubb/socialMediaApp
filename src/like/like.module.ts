import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([Like, User, Post]) ],
  controllers: [LikeController],
  providers: [LikeService],
  exports:[LikeService]
})
export class LikeModule {}
