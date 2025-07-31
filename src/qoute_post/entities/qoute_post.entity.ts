import { Post } from "src/posts/entities/post.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('qouted_posts')
export class QoutePost {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    authhor: string

    @Column()
    qoute:string


    @OneToOne(()=>Post)
    post:Post



}
