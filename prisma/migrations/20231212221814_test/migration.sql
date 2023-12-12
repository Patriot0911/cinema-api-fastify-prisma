/*
  Warnings:

  - A unique constraint covering the columns `[filmId]` on the table `AvailableFilms` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "AvailableFilms" DROP CONSTRAINT "AvailableFilms_filmId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryHasFilm" DROP CONSTRAINT "CategoryHasFilm_catId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryHasFilm" DROP CONSTRAINT "CategoryHasFilm_filmId_fkey";

-- DropForeignKey
ALTER TABLE "SessionInfo" DROP CONSTRAINT "SessionInfo_filmId_fkey";

-- DropForeignKey
ALTER TABLE "SessionInfo" DROP CONSTRAINT "SessionInfo_hallId_fkey";

-- DropForeignKey
ALTER TABLE "Tickets" DROP CONSTRAINT "Tickets_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "VipStatus" DROP CONSTRAINT "VipStatus_ticketId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "AvailableFilms_filmId_key" ON "AvailableFilms"("filmId");

-- AddForeignKey
ALTER TABLE "AvailableFilms" ADD CONSTRAINT "AvailableFilms_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryHasFilm" ADD CONSTRAINT "CategoryHasFilm_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryHasFilm" ADD CONSTRAINT "CategoryHasFilm_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionInfo" ADD CONSTRAINT "SessionInfo_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionInfo" ADD CONSTRAINT "SessionInfo_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VipStatus" ADD CONSTRAINT "VipStatus_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
