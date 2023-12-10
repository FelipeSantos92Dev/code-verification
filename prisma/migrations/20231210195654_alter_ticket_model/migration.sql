/*
  Warnings:

  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Ticket";

-- CreateTable
CREATE TABLE "tickets" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "whatsapp" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tickets_code_key" ON "tickets"("code");
