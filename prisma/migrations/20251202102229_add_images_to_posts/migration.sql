-- AlterTable
ALTER TABLE "public"."posts" ADD COLUMN     "images" TEXT[] DEFAULT ARRAY[]::TEXT[];
