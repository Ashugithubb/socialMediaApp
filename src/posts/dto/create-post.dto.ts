
import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf, IsInt } from 'class-validator';
import { PostCategory } from '../enum/post.category';

export class CreatePostDto {
  @IsEnum(PostCategory)
  postCatogory: PostCategory;

  @IsInt()
  userId: number;

  // ✅ Only required when postCatogory is TEXT
  @ValidateIf(o => o.postCatogory === PostCategory.TEXT)
  @IsString()
  @IsNotEmpty()
  content?: string;

  // ✅ Only required when postCatogory is QUOTE
  @ValidateIf(o => o.postCatogory === PostCategory.QOUTE)
  @IsString()
  @IsNotEmpty()
  quote?: string;

  @ValidateIf(o => o.postCatogory === PostCategory.QOUTE)
  @IsString()
  @IsNotEmpty()
  author?: string;
}
