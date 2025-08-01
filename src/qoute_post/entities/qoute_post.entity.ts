import { Post } from "src/posts/entities/post.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PolymorphicParent } from "typeorm-polymorphic";

@Entity('qouted_posts')
export class QoutePost {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    author: string

    @Column()
    quote: string

    @OneToOne(() => Post, post => post.quotePost, { onDelete: 'CASCADE' })
    @JoinColumn()
    post: Post;

    // @PolymorphicParent(()=>Post)
    //  post: Post;

}
