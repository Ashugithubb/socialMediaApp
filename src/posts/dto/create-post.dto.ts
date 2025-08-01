
import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf, IsInt } from 'class-validator';
import { PostCategory } from '../enum/post.category';

export class CreatePostDto {
  @IsEnum(PostCategory)
  postCatogory: PostCategory;

  @IsInt()
  userId: number;

  @ValidateIf(o => o.postCatogory === PostCategory.TEXT)
  @IsString()
  @IsOptional()
  content?: string;

  
  @ValidateIf(o => o.postCatogory === PostCategory.QOUTE)
  @IsString()
 @IsOptional()
  quote?: string;

  @ValidateIf(o => o.postCatogory === PostCategory.QOUTE)
  
  @IsString()
  @IsOptional()
  author?: string;


}
