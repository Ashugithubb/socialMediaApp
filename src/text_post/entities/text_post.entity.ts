import { Post } from "src/posts/entities/post.entity"
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('texted_post')
export class TextPost {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @OneToOne(() => Post)
    post: Post

}
