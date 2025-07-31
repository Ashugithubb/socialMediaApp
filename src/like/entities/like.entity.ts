import { Post } from "src/posts/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('likes')
@Entity()
@Unique(['user', 'post']) // 🚫 Prevent duplicate likes
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.likes, { eager: false, onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Post, post => post.likes, { eager: false, onDelete: 'CASCADE' })
  post: Post;

  @CreateDateColumn()
  likedAt: Date;
}
