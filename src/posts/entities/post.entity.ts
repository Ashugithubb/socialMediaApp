import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostCategory } from "../enum/post.category";
import { User } from "src/user/entities/user.entity";
import { QoutePost } from "src/qoute_post/entities/qoute_post.entity";
import { TextPost } from "src/text_post/entities/text_post.entity";
import { Like } from "src/like/entities/like.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'enum', enum: PostCategory })
    postCatogory: PostCategory

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User, (u) => u.posts)
    user: User

    @OneToOne(() => TextPost, textPost => textPost.post)
    textPost: TextPost;

    @OneToOne(() => QoutePost, quotePost => quotePost.post)
    quotePost: QoutePost;

    @OneToMany(() => Like, like => like.post)
    likes: Like[];

    // @PolymorphicChildren(()=>[QoutePost,TextPost])
    //  textOrQoute: QoutePost | TextPost;   

}
