import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { LikeModule } from './like/like.module';
import { TextPostModule } from './text_post/text_post.module';
import { QoutePostModule } from './qoute_post/qoute_post.module';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),TypeOrmModule.forRootAsync(typeOrmConfig), UserModule, PostsModule, LikeModule, TextPostModule, QoutePostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
