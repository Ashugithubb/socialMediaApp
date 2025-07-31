import { Post } from "src/posts/entities/post.entity"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('texted_post')
export class TextPost {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

@OneToOne(() => Post, post => post.textPost, { onDelete: 'CASCADE' })
  @JoinColumn()
  post: Post;

}
