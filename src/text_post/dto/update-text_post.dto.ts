import { PartialType } from '@nestjs/mapped-types';
import { CreateTextPostDto } from './create-text_post.dto';

export class UpdateTextPostDto extends PartialType(CreateTextPostDto) {}
