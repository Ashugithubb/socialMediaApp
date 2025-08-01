import { IsEnum, IsIn, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { PostCategory } from '../enum/post.category';

export class DiscoverPostQueryDto {
  @Type(() => Number)
  @Min(1)
  @IsOptional()
  page: number = 1;

  @Type(() => Number)
  @Min(1)
  @IsOptional()
  limit: number = 10;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(PostCategory)
  postCatogory?: PostCategory;

  @IsOptional()
  @IsIn(['NEW', 'OLD'])
  sort: 'NEW' | 'OLD' = 'NEW';
}
