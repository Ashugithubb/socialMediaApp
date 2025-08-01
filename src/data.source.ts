import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { Post } from './posts/entities/post.entity';
import { QoutePost } from './qoute_post/entities/qoute_post.entity';
import { TextPost } from './text_post/entities/text_post.entity';
import { Like } from './like/entities/like.entity';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
 entities:[User,Post,Like,QoutePost,TextPost],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: true,
});
export default AppDataSource;