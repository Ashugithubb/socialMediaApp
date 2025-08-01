import { MigrationInterface, QueryRunner } from "typeorm";

export class InsideDocker1754045967812 implements MigrationInterface {
    name = 'InsideDocker1754045967812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "qouted_posts" ("id" SERIAL NOT NULL, "author" character varying NOT NULL, "quote" character varying NOT NULL, CONSTRAINT "PK_96f52e65aed395b5df87cb26f21" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "texted_post" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_4a9e935d8092c2b56df8b2b92f1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."post_postcatogory_enum" AS ENUM('Text', 'Qoute')`);
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "postCatogory" "public"."post_postcatogory_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "like" ("id" SERIAL NOT NULL, "IsLIked" boolean NOT NULL DEFAULT false, "likedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "postId" integer, CONSTRAINT "PK_eff3e46d24d416b52a7e0ae4159" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "likes" ("id" SERIAL NOT NULL, "IsLIked" boolean NOT NULL DEFAULT false, "likedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "postId" integer, CONSTRAINT "PK_a9323de3f8bced7539a794b4a37" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_5c1cf55c308037b5aca1038a131" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_e8fb739f08d47955a39850fac23" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_3acf7c55c319c4000e8056c1279" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_cfd8e81fac09d7339a32e57d904" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "FK_e2fe567ad8d305fefc918d44f50" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_e2fe567ad8d305fefc918d44f50"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "FK_cfd8e81fac09d7339a32e57d904"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_3acf7c55c319c4000e8056c1279"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_e8fb739f08d47955a39850fac23"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_5c1cf55c308037b5aca1038a131"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "likes"`);
        await queryRunner.query(`DROP TABLE "like"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TYPE "public"."post_postcatogory_enum"`);
        await queryRunner.query(`DROP TABLE "texted_post"`);
        await queryRunner.query(`DROP TABLE "qouted_posts"`);
    }

}
