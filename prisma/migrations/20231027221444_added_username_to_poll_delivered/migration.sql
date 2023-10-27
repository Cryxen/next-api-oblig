/*
  Warnings:

  - Added the required column `username` to the `PollDelivered` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PollDelivered" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "checkboxes" TEXT NOT NULL,
    "username" TEXT NOT NULL
);
INSERT INTO "new_PollDelivered" ("checkboxes", "id", "question") SELECT "checkboxes", "id", "question" FROM "PollDelivered";
DROP TABLE "PollDelivered";
ALTER TABLE "new_PollDelivered" RENAME TO "PollDelivered";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
