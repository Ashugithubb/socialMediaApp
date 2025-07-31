import { PartialType } from '@nestjs/mapped-types';
import { CreateQoutePostDto } from './create-qoute_post.dto';

export class UpdateQoutePostDto extends PartialType(CreateQoutePostDto) {}
