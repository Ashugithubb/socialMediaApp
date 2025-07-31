import { Like } from "src/like/entities/like.entity";
import { Post } from "src/posts/entities/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    email: string;

    @Column()
    name:string

    @OneToMany(()=>Post,(p)=>p.user)
    post:Post[]

    @OneToMany(()=>Like,(l)=>l.user)
    like:Like[]
}
