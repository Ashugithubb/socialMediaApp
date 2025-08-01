import AppDataSource from 'src/data.source';
import { QoutePost } from 'src/qoute_post/entities/qoute_post.entity';
import { TextPost } from 'src/text_post/entities/text_post.entity';
import { DataSource } from 'typeorm';
import { AbstractPolymorphicRepository, PolymorphicRepository } from 'typeorm-polymorphic';

@PolymorphicRepository(TextPost)
export class TextPostRepositry extends AbstractPolymorphicRepository<TextPost> { }

const repository = AbstractPolymorphicRepository.createRepository(
    AppDataSource,
    TextPostRepositry,
);


@PolymorphicRepository(QoutePost)
export class QuotePostRepositry extends AbstractPolymorphicRepository<QoutePost> { }

const repository2 = AbstractPolymorphicRepository.createRepository(
    AppDataSource,
    QuotePostRepositry,
);


