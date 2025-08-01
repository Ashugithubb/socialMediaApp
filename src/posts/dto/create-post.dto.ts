
import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf, IsInt } from 'class-validator';
import { PostCategory } from '../enum/post.category';

export class CreatePostDto {
  @IsEnum(PostCategory)
  postCatogory: PostCategory;

  @IsInt()
  userId: number;


  @IsString()
  @IsOptional()
  content?: string;


  @IsString()
  @IsOptional()
  quote?: string;


  @IsString()
  @IsOptional()
  author?: string;


}
