import { MigrationInterface, QueryRunner } from "typeorm";

export class LikecoulmnChnages1754041117783 implements MigrationInterface {
    name = 'LikecoulmnChnages1754041117783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "UQ_78a9f4a1b09b6d2bf7ed85f252f"`);
        await queryRunner.query(`ALTER TABLE "likes" DROP CONSTRAINT "UQ_74b9b8cd79a1014e50135f266fe"`);
        await queryRunner.query(`ALTER TABLE "like" ADD "IsLIked" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "likes" ADD "IsLIked" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes" DROP COLUMN "IsLIked"`);
        await queryRunner.query(`ALTER TABLE "like" DROP COLUMN "IsLIked"`);
        await queryRunner.query(`ALTER TABLE "likes" ADD CONSTRAINT "UQ_74b9b8cd79a1014e50135f266fe" UNIQUE ("userId", "postId")`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "UQ_78a9f4a1b09b6d2bf7ed85f252f" UNIQUE ("userId", "postId")`);
    }

}
