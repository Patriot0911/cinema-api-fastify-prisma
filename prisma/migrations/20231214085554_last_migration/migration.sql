/*
  Warnings:

  - A unique constraint covering the columns `[filmId,catId]` on the table `CategoryHasFilm` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ticketId]` on the table `VipStatus` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CategoryHasFilm_filmId_catId_key" ON "CategoryHasFilm"("filmId", "catId");

-- CreateIndex
CREATE UNIQUE INDEX "VipStatus_ticketId_key" ON "VipStatus"("ticketId");
