import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepo:Repository<User>,
                ){}
  async loginOrCreate(createUserDto: CreateUserDto) {
    const email = createUserDto.email;
    const existing = await this.userRepo.findOneBy({email})
    if(existing){
      return "User Logeed In Successfully";
    }
     await this.userRepo.save(createUserDto);
     return "User Registred Successfully";
  }

  async findOneByemail(email:string) {
    return await this.userRepo.findOne({
      where:{email},
      select:['email','id']
    });
  }

  
  async findOne(id: number) {
  if (isNaN(id)) {
    throw new BadRequestException('Invalid user ID');
  }
  return this.userRepo.findOneBy({ id });
}


  async findAll() {
    return await this.userRepo.find();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update(id,updateUserDto);
  }
  
  async remove(id: number) {
    return await this.userRepo.delete(id);
  }


async searchUsers(q:string){
  return await this.userRepo.find({
    where: [
      { name: ILike(`%${q}%`) },
      { email: ILike(`%${q}%`) }
    ],
    take: 7,
  });
}





}