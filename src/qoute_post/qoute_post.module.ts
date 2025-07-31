import { Module } from '@nestjs/common';
import { QoutePostService } from './qoute_post.service';
import { QoutePostController } from './qoute_post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QoutePost } from './entities/qoute_post.entity';

@Module({
  imports:[TypeOrmModule.forFeature([QoutePost])],
  controllers: [QoutePostController],
  providers: [QoutePostService],
})
export class QoutePostModule {}
