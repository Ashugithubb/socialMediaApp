import { User } from "src/user/entities/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('likes')
export class Like {
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>User,)
    user:User
}
