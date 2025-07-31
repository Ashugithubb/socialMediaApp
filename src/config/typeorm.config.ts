import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from 'src/user/entities/user.entity';


import { QoutePost } from 'src/qoute_post/entities/qoute_post.entity';
import { TextPost } from 'src/text_post/entities/text_post.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Like } from 'src/like/entities/like.entity';
export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: parseInt(configService.get<string>('DB_PORT') ?? '5432', 10),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),
    entities:[User,Like,Post,QoutePost,TextPost],
    synchronize: true,
  }),
};