import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostCategory } from "../enum/post.category";
import { User } from "src/user/entities/user.entity";
import { QoutePost } from "src/qoute_post/entities/qoute_post.entity";
import { TextPost } from "src/text_post/entities/text_post.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'enum', enum: PostCategory })
    postCatogory: PostCategory

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User, (u) => u.post)
    user: User

    @OneToOne(() => QoutePost)
    @JoinColumn({ name: 'postId' })
    qoutedPost: QoutePost

    @OneToOne(() => TextPost)
    @JoinColumn({ name: 'postId' })
    textPost: TextPost
}
