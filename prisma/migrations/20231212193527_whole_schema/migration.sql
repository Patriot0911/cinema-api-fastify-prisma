-- CreateTable
CREATE TABLE "Hall" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Hall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableFilms" (
    "id" SERIAL NOT NULL,
    "filmId" INTEGER NOT NULL,

    CONSTRAINT "AvailableFilms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryHasFilm" (
    "id" SERIAL NOT NULL,
    "filmId" INTEGER NOT NULL,
    "catId" INTEGER NOT NULL,

    CONSTRAINT "CategoryHasFilm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SessionInfo" (
    "id" SERIAL NOT NULL,
    "filmId" INTEGER NOT NULL,
    "hallId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SessionInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tickets" (
    "id" SERIAL NOT NULL,
    "ownerInfo" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "cost" INTEGER,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VipStatus" (
    "id" SERIAL NOT NULL,
    "ticketId" INTEGER NOT NULL,

    CONSTRAINT "VipStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AvailableFilms" ADD CONSTRAINT "AvailableFilms_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryHasFilm" ADD CONSTRAINT "CategoryHasFilm_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryHasFilm" ADD CONSTRAINT "CategoryHasFilm_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionInfo" ADD CONSTRAINT "SessionInfo_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionInfo" ADD CONSTRAINT "SessionInfo_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "Hall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "SessionInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VipStatus" ADD CONSTRAINT "VipStatus_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
