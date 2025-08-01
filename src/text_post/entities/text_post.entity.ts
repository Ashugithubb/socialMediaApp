import { Post } from "src/posts/entities/post.entity"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { PolymorphicParent } from "typeorm-polymorphic";

@Entity('texted_post')
export class TextPost {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  content: string

  // @PolymorphicParent(() => Post)
  // post: Post;
  @OneToOne(() => Post, post => post.textPost, { onDelete: 'CASCADE' })
  @JoinColumn()
  post: Post;

}
