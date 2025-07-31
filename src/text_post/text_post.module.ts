import { Module } from '@nestjs/common';
import { TextPostService } from './text_post.service';
import { TextPostController } from './text_post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QoutePost } from 'src/qoute_post/entities/qoute_post.entity';
import { TextPost } from './entities/text_post.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TextPost])],
  controllers: [TextPostController],
  providers: [TextPostService],
})
export class TextPostModule {}
